<template>
<div>
  <NavBar/>
    <div class="fr-main-content">
      <header>
        <div class="fr-search-wrapper">
          <span class="ti-search"></span>
          <input type="search" placeholder="Search" />
        </div>
        <div class="fr-social-icons">
          <span class="ti-bell"></span>
          <span class="ti-comment"></span>
        </div>
      </header>
      <main>
        <App/>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/admin/component/Nav";
import App from "../../components/admin/EditProduk";
//import App from "../../components/admin/CompleteProduk";

//`7import axios from 'axios';

export default {
   components: {
     App,
     NavBar
   },
   data(){
     return{
       compMain:false,
       compForm:false,
       btnStore:false
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
    //  var bodyFormData = new FormData();
    //   bodyFormData.append("user_id",localStorage.getItem("user-id"));
    // axios({
    //     method: "post",
    //     url:`${this.$api}check_store`,
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //     .then((response) => {
    //       if(response.data.MESSAGE == "ERROR"){
    //         this.compMain = true
    //       }else{
    //         this.compMain = false
    //         this.btnStore = true
    //       }
    //     })
    //     .catch(function () {
        
    //     });
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