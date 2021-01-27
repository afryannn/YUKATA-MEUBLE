<template>
  <div>
    <div class="my-header">
      <div class="my-container">
        <div class="my-navbar">
          <div class="my-logo">
            <img src="../assets/images/logo.png" width="125px" />
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
              <li v-if="(this.id == null)">
                <router-link to="/Login">Login</router-link>
              </li>
              <li v-else>
                <router-link to="/About">{{this.username}}</router-link>
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
                <option>Short by sale </option>
            </select>
        </div>
        <div class="my-row">
             <div class="my-col-4" v-for="data in datas" :key="data.id">
                <img src="../assets/images/product-11.jpg">
                 <h6 style="color:#222831 !important; font-weight:bold !important;">{{data.product_name}}</h6>
                 <p>{{data.name}}<br>Rp.{{data.product_price}}</p>
            </div>
        </div>
    </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue"
import axios from "axios";

export default {
  components:{
    Footer
  },
   data(){
     return{
       id :'',
       username :'',
       datas:[]
     }
   },
       methods:{
      setProduct(data){
        this.datas = data
      },
    },
  mounted(){
       axios
      .get("http://localhost:8000/api/v1/list-produk2")
      .then((response) => this.setProduct(response.data.DATA))
      .catch((error) => console.log("Fail : ", error));
     this.id = localStorage.getItem('user-id');
     this.username = localStorage.getItem('username');
  },
}
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
