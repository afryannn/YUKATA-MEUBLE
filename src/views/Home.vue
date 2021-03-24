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
                <router-link to="/" class="hover-c" style="text-decoration:none;">Home</router-link>
              </li>
              <li>
                <router-link to="/Produk" class="router-link">Produk</router-link>
              </li>
              <li>
                <router-link to="/Cari" class="router-link">Cari</router-link>
              </li>
              <!-- <li>
                <router-link to="/Tentang">Tentang</router-link>
              </li> -->
              <li v-if="(this.id == null)">
                <router-link to="/Login" class="router-link">Login</router-link>
              </li>
              <li v-else>
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
            <img src="../assets/images/Banner/dinningtable.jpg" style="height:340px;" />
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
      loading:false,
      mItem:true
      // Nav:false
    };
  },
  mounted() {
    this.mItem = true
    window.addEventListener("resize", this.myEventHandler);
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role_user");
    console.log(document.getElementById("MenuItems"))
  },
  methods: {
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
  padding: 8px 30px;
  color: white;
}
.router-link{
  text-decoration: none !important;
}
</style>
