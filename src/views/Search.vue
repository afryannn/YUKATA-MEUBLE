<template>
  <div>
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
                <router-link to="/Cari" class="hover-c">Cari</router-link>
              </li>
              <!-- <li>
                <router-link to="/Tentang">Tentang</router-link>
              </li> -->
              <li v-if="this.id == null">
                <router-link to="/Login" class="router-link">Login</router-link>
              </li>
              <li v-else>
                <router-link to="/user" class="router-link">{{
                  this.username
                }}</router-link>
              </li>
            </ul>
          </nav>
          <img
            src="../assets/images/menu.png"
            class="menu-icon"
            @click="menutoggle()"
          />
        </div>
        <div class="my-small-container type-Rs">
          <div class="my-row row-2">
            <p></p>
            <div class="input-group flex-nowrap">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Cari..."
                aria-label="Cari"
                aria-describedby="addon-wrapping"
              />
              <div class="input-group-prepend">
                <button
                  style="
                    color: white;
                    margin-left: 10px;
                    border-radius: 5px;
                    height: 38px;
                    width: 80px;
                    background: #28df99;
                  "
                  id="addon-wrapping"
                  @click="searchProduct"
                >
                  Cari
                </button>
              </div>
            </div>
            <div class="mt-3">
              <p>Pencarian Populer :</p>
              <span  v-for="e in popularity" v-bind:key="e.id" @click="clkpopular(e.title)" 
              class="badge badge-pill m-1 my-popular"><p class="mt-1" style="color:#28df99"><i class="fab fa-hotjar"></i> {{e.title}}</p></span>
            </div>
          </div>

          <h3 class="text-center">Hasil Produk</h3>

          <div class="my-row pr">
            <div
              v-show="isEmpty"
              class="my-col-4"
              v-for="data in dSearch"
              :key="data.id"
            >
              <div
                class="card"
                style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
              >
                <router-link
                  :to="'/Produk/' + data.product_key"
                  style="text-decoration: none !important"
                >
                  <div class="card-body">
                    <img :src="url + data.img1" />
                    <h6
                      style="
                        font-size: 18px;
                        color: #222831 !important;
                        font-weight: bold !important;
                      "
                    >
                      {{ data.product_name }}
                    </h6>
                    <p>{{ data.name }}<br />Rp.{{ data.product_price }}</p>
                  </div>
                </router-link>
              </div>
            </div>
            <v-progress-circular
              indeterminate
              v-show="this.loading"
              style="color: #28df99; margin-top: 10px !important"
            ></v-progress-circular>
            <img
              v-show="notfound"
              src="../assets/nfound.png"
              width="190px"
              style="margin-top: 50px !important"
            />
          </div>
        </div>
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
      notfound: false,
      id: "",
      username: "",
      search: "",
      dSearch: [],
      loading: false,
      isEmpty: true,
      url: "http://localhost:8000/api/v1/src/",
      mItem: true,
      popularity:[],
    };
  },
  methods: {
    setSearch(data) {
      this.dSearch = data;
    },
    clkpopular(title){
      this.search = title
    },
    searchProduct() {
      if (!this.search) {
        this.isEmpty = false;
      } else {
        this.loading = true;
        this.isEmpty = false;
        this.notfound = false;

        var bodyFormDataa = new FormData();
        bodyFormDataa.append("title", this.search);
        axios({
          method: "post",
          url: `${this.$api}post_popularity`,
          data: bodyFormDataa,
          headers: { "Content-Type": "multipart/form-data" },
        })
        var bodyFormData = new FormData();
        bodyFormData.append("kata_kunci", this.search);
        axios({
          method: "post",
          url: `${this.$api}search-produk`,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
          this.notfound = false;
          this.loading = false;
          this.isEmpty = true;
          this.setSearch(response.data.DATA);
          if (response.data.MESSAGE == "Kata kunci tidak ditemukan") {
            this.notfound = true;
            this.loading = false;
          }
        });
      }
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
  mounted() {
    this.mItem = true;
    window.addEventListener("resize", this.myEventHandler);
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
     axios({
          method: "get",
          url: `${this.$api}get_popularity`,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
           this.popularity = response.data.DATA
        });
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
.my-popular{
  height:28px;
  border: 1.5px solid #28df99;
  background:none;
  color:#28df99;
}
.my-popular:hover{
  background-color:rgba(40, 223, 153,0.3);
   border: 1.5px solid #fff;
}
</style>
