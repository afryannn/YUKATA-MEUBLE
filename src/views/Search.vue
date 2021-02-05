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
                <router-link to="/Produk">Produk</router-link>
              </li>
              <li>
                <router-link to="/Cari" class="hover-c">Cari</router-link>
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
            <p></p>
            <div class="input-group flex-nowrap">
              <input
               v-model ="search"
                type="text"
    
                class="form-control"
                placeholder="Cari..."
                aria-label="Cari"
                aria-describedby="addon-wrapping"
              />
              <div class="input-group-prepend">
                <button style="
                color:white;
                margin-left:10px;
                border-radius:5px;
                height:38px;
                width:80px;
                background:#28df99;" id="addon-wrapping" @click="searchProduct">Cari</button>
              </div>
            </div>
          </div>
          <h3>Hasil Produk</h3>
          <div class="my-row">
            <div class="my-col-4" v-for="data in dSearch" :key="data.id">
                <div
            class="card"
            style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <router-link
              :to="'/Produk/' + data.product_key"
              style="text-decoration: none !important"
            >
              <div class="card-body">
                <img src="../assets/images/mejatv2.png" />
                <h6
                  style="
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
             <img v-show="notfound" src="../assets/nfound.png" width="190px" style="margin-top:50px !important;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {
  
  },
  data() {
    return {
      notfound:false,
      id: "",
      username: "",
      search:"",
      dSearch:[]
    };
  },
  methods: {
    setSearch(data) {
      this.dSearch = data;
    },
    searchProduct(){
      var bodyFormData = new FormData();
      bodyFormData.append("kata_kunci", this.search);
      axios({
        method: "post",
        url: `${this.$api}search-produk`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
           console.log(response.data.DATA);
              this.notfound = false 
              this.setSearch(response.data.DATA);
          
           if(response.data.MESSAGE == "Kata kunci tidak ditemukan"){
              this.notfound = true 
           }
        })
        .catch(function (response) {
          console.log(response);
        });
       }
  },
  mounted() {
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
