<template>
  <div>
     <v-overlay :value="loading" :opacity="1" color="#fff">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
      </v-overlay>
    <!--------------------NAVBAR---------------------->
    <input type="checkbox" id="sidebar-toggle" />
    <div class="fr-sidebar">
      <div class="fr-sidebar-header">
        <h3 class="fr-brand">
          <img src="../../assets/yktseller.png" width="13%" ><span class="t-spn ml-2" style="font-size: 13px">SELLER YUKATA</span>
        </h3>
        <label for="sidebar-toggle" class="ti-menu-alt"></label>
      </div>
      <div class="fr-sidebar-menu">
        <Nav />
      </div>
    </div>
    <!--------------------END NAVBAR---------------------->

    <div class="fr-main-content">
      <header>
        <div class="fr-search-wrapper">
            <h6 style="color: #28df99">Hapus Produk</h6>
        </div>
        <div class="fr-social-icons">
          <span class="ti-bell"></span>
          <span class="ti-comment"></span>
          <div></div>
        </div>
      </header>

      <!--------------------START CONTENT---------------------->
      <main>
          <!-- <div class="row">
          <div v-for="e in items" v-bind:key="e.id">
            <div class="card" style="width: 12rem; margin: 10px; height:430px">
              <img
                class="card-img-top"
                :src="img+e.img1"
                alt="Card image cap"
              />
              <div class="card-body">
                <strong class="card-title">{{ e.product_name }}</strong><br>
                <p style="margin:0 !important;">Harga : {{ e.product_price }}</p>
                <p>Kategori : {{ e.category }}</p>
                <center>
                  <button
                    @click="go(e.product_key)"
                    style="
                      width: 150px;
                      background: red;
                      height: 35px;
                      border-radius: 5px;
                      color:white;
                    "
                  >
                    Hapus
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div> -->
        <div class="card">
          <div class="card-body">
            <div class="my-small-container">
              <div class="my-row">
                <div
                  class="my-col-4 d-flex justify-content-center"
                  v-for="data in items"
                  :key="data.id"
                >
                  <div
                    class="card"
                    style="
                      width: 15rem;
                      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
                    "
                  >
             
                      <div class="card-body">
                        <img :src="img + data.img1" />
                        <h6
                          class="mt-2"
                          style="
                            color: #222831 !important;
                            font-weight: bold !important;
                          "
                        >
                          {{ data.product_name }}
                        </h6>
                        <p>Rp.{{ data.product_price }}</p>
                        <center><button @click="go(data.product_key)"><i class="fas fa-trash text-danger"></i></button></center>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!--------------------END CONTENT---------------------->
    </div>
  </div>
</template>
<script>
import Nav from "../../components/admin/component/Nav";
import axios from 'axios'
export default {
  components: {
    Nav,
  },
    data() {
    return {
      items: [],
      img : '',
      loading:false
    };
  },
  methods: {
    go(data) {
      this.loading = true
      var bodyFormData = new FormData();
      bodyFormData.append("key_product", data);
      axios({
        method: "post",
        url: `${this.$api}delete-produk`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(() => {
          this.loading = false
          this.$router.replace({ name: "Dashboard" });
        })
    },
  },
  mounted() {
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", localStorage.getItem("user-id"));
    axios({
      method: "post",
      url: `${this.$api}all-store-produk`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        this.items = response.data.DATA;
        this.img = `${this.$api}src/`;
      })
  },
};
</script>
<style scoped>
</style>