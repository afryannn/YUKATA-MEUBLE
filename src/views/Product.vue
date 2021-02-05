<template>
  <div>
    <div class="my-header">
      <div class="my-container">
        <div class="my-navbar">
          <div class="my-logo">
            <img src="../assets/b.png" width="180px" />
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/Produk" class="hover-c">Produk</router-link>
              </li>
              <li>
                <router-link to="/Cari">Cari</router-link>
              </li>
              <li>
                <router-link to="/Tentang">Tentang</router-link>
              </li>
              <li v-if="this.id == null">
                <router-link to="/Login">Login</router-link>
              </li>
              <li v-else>
                <router-link to="/About">{{ this.username }}</router-link>
              </li>
            </ul>
          </nav>
          <!-- <img src="../assets/images/cart.png" width="30px" height="30px"/> -->
          <img src="../assets/images/menu.png" class="menu-icon" />
        </div>
        <div class="my-small-container">
          <div class="my-row row-2">
            <h2>All Products</h2>
            <select>
              <option>Default Shorting</option>
              <option>Short by price</option>
              <option>Short by popularity</option>
              <option>Short by rating</option>
              <option>Short by sale</option>
            </select>
          </div>
          <div class="my-row">
            <div class="my-col-4" v-for="data in datas" :key="data.id">
              <div
                class="card"
                style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
              >
              <router-link :to="'/Produk/'+data.product_key" style="text-decoration:none !important;">
                <div class="card-body">
                     <img src="../assets/images/mejatv2.png" />
                  <h6
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
    };
  },
  methods: {
    setProduct(data) {
      this.datas = data;
    },
  },
  mounted() {
    axios
      .get(`${this.$api}list-produk2`)
      .then((response) => this.setProduct(response.data.DATA))
      .catch((error) => console.log("Fail : ", error));
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
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
</style>
