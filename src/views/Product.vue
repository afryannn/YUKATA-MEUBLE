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
              <li style="text-decoration:none;">
                <router-link to="/Produk" class="hover-c">Produk</router-link>
              </li>
              <li>
                <router-link to="/Cari"  class="router-link">Cari</router-link>
              </li>
              <!-- <li>
                <router-link to="/Tentang">Tentang</router-link>
              </li> -->
             <li v-if="(this.id == null)">
                <router-link to="/Login" class="router-link">Login</router-link>
              </li>
              <li v-else  class="router-link">
                <div v-if="(this.role == 'SELLER')">
                  <router-link to="/Dashboard" class="router-link">Dashboard</router-link>
                </div>
                <div v-else>
                  <router-link to="/user" class="router-link">{{this.username}}</router-link>
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
        <div class="my-small-container">
          <div class="my-row row-2">
            <h2>Semua Produk</h2>
           
          </div>
          <div class="my-row">
            <div class="my-col-4" v-for="data in datas" :key="data.id">
              <div
                class="card"
                style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
              >
              <router-link :to="'/Produk/'+data.product_key" style="text-decoration:none !important;">
                <div class="card-body">
                     <img :src="url+data.img1" />
                  <h6
                  class="mt-2"
                    style="
                      color: #222831 !important;
                      font-weight: bold !important;
                    ">
                    {{ data.product_name }}
                  </h6>
                  <p>{{ data.name }}<br />Rp.{{ data.product_price }}</p>
                </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
//import DetailProduct from "@/views/ProductDetail.vue";
import axios from "axios";

export default {

  components: {
    Footer,
  },
  data() {
    return {
      id: "",
      username: "",
      datas: [],
      role:'',
      loading: true,
      url:"http://localhost:8000/api/v1/src/",
      mItem:true

    };
  },
  methods: {
    setProduct(data) {
      this.datas = data;
    },
     menutoggle() {
        this.mItem = !this.mItem;
    },

    myEventHandler() {
      var x = window.matchMedia("(max-width: 800px)")
      var b = window.matchMedia("(min-width: 800px)")
        if(b.matches){
        this.mItem = true
      }
      if(x.matches){
        this.mItem = false
      }
    }
  },
  mounted() {
    this.mItem = true
    this.loading = true
    window.addEventListener("resize", this.myEventHandler);
    axios
      .get(`${this.$api}list-produk2`)
      .then((response) => {
        this.setProduct(response.data.DATA)
        this.loading = false
      });
    this.id = localStorage.getItem("user-id");
    this.role = localStorage.getItem("role_user");
    this.username = localStorage.getItem("username");
  },
    created(){
    this.menutoggle();
  }
};
</script>
<style>
.hover-c {
  font-weight: normal;
  background: #28df99;
  border-radius: 30px;
  text-decoration: none !important;
  padding: 8px 30px;
  color: white;
}
.router-link{
  text-decoration: none !important;
}

</style>
