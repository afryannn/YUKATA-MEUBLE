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
                <router-link to="/" class="hover-c">Home</router-link>
              </li>
              <li>
                <router-link to="/Produk">Produk</router-link>
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
                <div v-if="(this.role == 'SELLER')">
                  <router-link to="/Dashboard">Dashboard</router-link>
                </div>
                <div v-else>
                  <router-link to="/user">cjfk</router-link>
                </div>
              </li>
            </ul>
          </nav>
          <!-- <img src="../assets/images/cart.png" width="30px" height="30px"/> -->
          <img
            src="../assets/images/menu.png"
            class="menu-icon"
            @click="menutoggle()"
          />
        </div>
        <div class="my-row">
          <div class="my-col-2">
            <h1>Mebel Baru<br />Tampilan Baru!</h1>
            <p>
              Nyamankan rumah anda dengan furniture baru,yang bisa anda dapatkan
              disini dengan berbagai penjual mebel seluruh jepara
            </p>
            <a href="/Produk" class="btn">Cari sekarang &#8594;</a>
          </div>
          <div class="my-col-2">
            <img src="../assets/images/Banner/big-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="categories">
      <div class="my-small-container">
        <div class="my-row">
          <div class="my-col-3">
            <img src="../assets/images/Banner/small-banner-1.png" alt="" />
          </div>
          <div class="my-col-3">
            <img src="../assets/images/Banner/small-banner-2.png" alt="" />
          </div>
          <div class="my-col-3">
            <img src="../assets/images/Banner/small-banner-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <NewProduk/>
  
    <Footer />
  </div>
</template>
<script>
import NewProduk from "../components/home/NewProduct.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NewProduk,
    Footer,
  },
  data() {
    return {
      id: "",
      username: "",
      role: "",
      loading:false
      // Nav:false
    };
  },
  mounted() {
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role_user");
    console.log(document.getElementById("MenuItems"))
  },
  methods: {
    menutoggle() {
       //   var MenuItems = document.getElementById("MenuItems");
      // // this.Nav = true
      // if(this.Nav == false){
      //   this.Nav = true
      // }else if(this.Nav == true){
      //   this.Nav = false
      // }
    //   var MenuItems = document.getElementById("MenuItems");
    //  // var click = false;
    //   if(MenuItems){
    //     MenuItems.style.maxHeight = "0px";
    //     console.log(MenuItems);
    //   }else{
    //     MenuItems.style.maxHeight = "200px";
    //   }
    //   if (click == true) {
    //     MenuItems.style.maxHeight = "200px";
    //     console.log("knjibn");
    //   }
    //    else {
    //     console.log("haha");
    //     MenuItems.style.maxHeight = "0px";
    //   }
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
</style>
