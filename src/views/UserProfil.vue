<template>
  <div>
    <v-overlay :value="loading" :opacity="1" color="#fff">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
    <div class="my-header">
      <div class="my-container">
        <div class="my-navbar">
          <div class="my-logo">
            <img src="../assets/b.png" width="180px" />
          </div>
          <nav>
            <ul v-show="mItem">
              <li>
                <router-link to="/" class="router-link">Home</router-link>
              </li>
              <li>
                <router-link to="/Produk" class="router-link"
                  >Produk</router-link
                >
              </li>
              <li>
                <router-link to="/Cari" class="router-link">Cari</router-link>
              </li>

              <li v-if="this.id == null">
                <router-link to="/Login" class="router-link">Login</router-link>
              </li>
              <li v-else>
                <div v-if="this.role == 'SELLER'">
                  <router-link to="/Dashboard" class="router-link"
                    >Dashboard</router-link
                  >
                </div>
                <div v-else>
                  <router-link to="/user" class="hover-c">{{
                    this.username
                  }}</router-link>
                </div>
              </li>
            </ul>
          </nav>
          <img
            src="../assets/images/menu.png"
            class="menu-icon"
            @click="menutoggle()"
          />
        </div>

        <div class="card shadow type-R">
          <div class="card-body overflow-auto">
            <h4 class="text-center">Daftar Transaksi</h4>
            <table class="table table-bordered mt-4">
              <thead>
                <tr>
                  <th scope="col" class="text-center">Gambar</th>
                  <th scope="col">Produk</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Penjual</th>
                  <th scope="col" class="text-center">Pdf</th>
                  <th scope="col" class="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="e in items" v-bind:key="e.id">
                  <th class="text-center">
                    <img
                      @click="overlay(e.product_key)"
                      :src="img + e.product_img1"
                      style="width: 75px; height: 75px"
                    />
                  </th>

                  <td>{{ e.product_name }}</td>
                  <td>{{ e.description }}</td>
                  <td>{{ e.product_price }}</td>
                  <td>{{ e.store_name }}</td>
                  <td class="text-center" style="padding: 0px !important">
                    <button
                      style="
                        margin-top: 30px;
                        border-radius: 5px;
                        background: #dc3545;
                        height: 35px;
                        width: 35px;
                      "
                      @click="getPdf(e.id)"
                    >
                      <i class="fas fa-file-pdf" style="color: white"></i>
                    </button>
                  </td>
                  <td
                    class="text-center"
                    style="padding: 0px !important"
                    v-if="e.status == 'DI PROSES'"
                  >
                    <button
                      @click="confirm(e.id)"
                      style="
                        color: white;
                        margin-top: 30px;
                        border-radius: 5px;
                        background: #28df99;
                        height: 35px;
                        width: 80px;
                      "
                    >
                      Di Proses
                    </button>
                  </td>
                  <td
                    class="text-center"
                    style="padding: 0px !important"
                    v-if="e.status == 'SELESAI'"
                  >
                    <button
                      @click="rStatus(e.id)"
                      style="
                        margin-top: 30px;
                        border-radius: 5px;
                        background: #d3e0ea;
                        height: 35px;
                        width: 80px;
                      "
                    >
                      Selesai
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button
          class="bg-danger"
          style="
            color: white;
            margin-top: 20px;
            border-radius: 5px;
            height: 43px;
            width: 90px;
          "
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      id: "",
      username: "",
      role: "",
      loading: false,
      items: [],
      img: "http://localhost:8000/api/v1/src/",
      mItem: true,
      // Nav:false
    };
  },
  mounted() {
    this.mItem = true;
    window.addEventListener("resize", this.myEventHandler);
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role_user");
    var bodyFormData = new FormData();
    bodyFormData.append("id", this.id);
    axios({
      method: "post",
      url: `${this.$api}visitor_transaksi`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        this.items = response.data.DATA;
        console.log(this.items);
        this.$router.reload();
      })
      .catch(function (response) {
        console.log(response);
      });
  },
  methods: {
    getPdf(id) {
      axios({
        method: "get",
        url: `${this.$api}getPdf/${id}`,
      });
    },
    confirm(id) {
      this.loading = true;
      var bodyFormData = new FormData();
      bodyFormData.append("id", id);
      axios({
        method: "post",
        url: `${this.$api}user-confirm`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        if (res.data.MESSAGE == "SUCCESS") {
          this.$router.go(this.$router.currentRoute);
          this.loading = false;
        }
      });
    },
    rStatus(id) {
      this.loading = true;
      var bodyFormData = new FormData();
      bodyFormData.append("id", id);
      axios({
        method: "post",
        url: `${this.$api}removestatus`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        if (res.data.MESSAGE == "SUCCESS") {
          this.$router.go(this.$router.currentRoute);
          this.loading = false;
        }
      });
    },
    menutoggle() {
      this.mItem = !this.mItem;
    },

    myEventHandler() {
      var x = window.matchMedia("(max-width: 800px)");
      var b = window.matchMedia("(min-width: 800px)");
      if (b.matches) {
        this.mItem = true;
      }
      if (x.matches) {
        this.mItem = false;
      }
    },
  },
};
</script>
<style>
.hover-c {
  font-weight: normal;
  background: #28df99;
  border-radius: 30px;
  padding: 8px 30px;
  color: white;
}
.router-link {
  text-decoration: none !important;
}
</style>
