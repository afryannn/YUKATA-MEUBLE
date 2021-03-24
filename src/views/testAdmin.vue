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
           <img src="../assets/yktseller.png" width="13%" ><span class="t-spn ml-2" style="font-size: 13px">SELLER YUKATA</span>
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
          <span class="ti-search"></span>
          <input type="search" placeholder="Search" />
        </div>
        <div class="fr-social-icons">
          <span class="ti-bell"></span>
          <span class="ti-comment"></span>
          <div></div>
        </div>
      </header>

      <!--------------------START CONTENT---------------------->
      <main>
        <Main v-show="this.compMain"></Main>
        <button class="btn-create-store" v-show="this.btnStore">
            <router-link to="/NewStore" style="text-decoration:none !important;">
           <p style="margin:auto; color:white !important;"><span>+</span><b>Buat Toko</b></p>
            </router-link>
        </button>
      </main>

      <!--------------------END CONTENT---------------------->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Main from "../components/admin/component/Dashboard";
import Nav from "../components/admin/component/Nav";
export default {
  components: {
    Main,
    Nav,
  },
   data(){
     return{
       compMain:false,
       compForm:false,
       btnStore:false,
       loading:false
     }
   },
  methods: {
    cek(){
      var isForm = this.showform
      if(isForm == false){
          this.showform = true
      }else if(isForm == true){
        this.showform = false
      }
    },

    Logout() {
      localStorage.removeItem("user-id");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("role_user");
      this.$router.replace({ name: "Home" });
    },
  },
  mounted(){
     this.loading = true
     var bodyFormData = new FormData();
      bodyFormData.append("user_id",localStorage.getItem("user-id"));
    axios({
        method: "post",
        url:`${this.$api}check_store`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          if(response.data.MESSAGE == "toko tidak ditemukan"){
            this.compMain = false
            this.btnStore = true
            this.loading = false
            localStorage.setItem("store-status","FALSE");               
          }else if(response.data.MESSAGE == "toko ditemukan"){
            this.compMain = true
            this.btnStore = false
            this.loading = false
            localStorage.setItem("store-status","TRUE");               
          }
          console.log(response);
          //   console.log(localStorage.getItem('user-id'));
            
          // if(response.data.MESSAGE == "ERROR"){
          //   this.compMain = true
          //   console.log(localStorage.getItem('user-id'));
          //   this.loading = false
          // }else{
          //   this.compMain = false
          //   this.btnStore = true
          // }
        })
  }
};
</script>
<style scoped>
.btn-create-store{
    box-shadow: 0px 3px 15px 0px #888888;
    background:#28df99;
    text-align:center;
    border: none;
    border-radius: 25px;
    position: absolute;
    width: 140px;
    height: 50px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -25px;
}
button:focus { outline:0 !important; }
</style>