<template>
  <div>
      <v-overlay :value="loading" :opacity="0.90">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
    <Found v-show="this.found"></Found>
    <div v-show="this.main">
    <div
      class="jumbotron jumbotron-fluid"
      style="
        box-shadow: 0px 5px 10px grey;
        border-radius: 0px;
        background-position: center;
        background-repeat: space;
        background-size: cover;
        height: 25rem;
      "
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.iBanner}')`,
      }"
    >
      <div class="container text-center">
        <h4 class="text-white mt-5"><b>TOKO</b></h4>
        <h1 style="color: #28df99">{{this.name}}</h1>
      </div>
    </div>
    <div class="container">
      <div class="card shadow" style="border-radius: 20px">
        <div class="card-body">
          <h3 class="text-center mt-1" style="color: #28df99">Profil</h3>
          <div class="row mt-4">
            <div class="col text-center">
              <img
                class="rounded-circle"
                :src="iProfil"
                width="30%"
                style="margin-top: 50px"
              />
            </div>
            <div class="col-8">
              <table class="table table-borderless">
                <tbody>
                  <tr style="background: none">
                    <td style="width: 100px !important; color: #28df99">
                      <b>Nama Toko</b>
                    </td>
                    <td>{{this.name}}</td>
                  </tr>
                  <tr style="background: none">
                    <td style="width: 100px !important; color: #28df99">
                      <b>Telephone</b>
                    </td>
                    <td>{{this.tlp}}</td>
                  </tr>
                  <tr style="background: none">
                    <td style="color: #28df99"><b>Alamat</b></td>
                    <td>
                     {{this.addrs}}
                    </td>
                  </tr>
                  <tr style="background: none">
                    <td style="width: 130px !important; color: #28df99">
                      <b>jumlah produk</b>
                    </td>
                    <td>{{this.count}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5 shadow" style="border-radius: 20px">
        <div class="card-body text-center">
          <h3 class="mt-3 text-xs-center" style="color: #28df99">Deskripsi</h3>
          <p class="mt-3">
            {{this.desc}}
          </p>
        </div>
      </div>

      <div class="card mt-5 shadow" style="border-radius: 20px">
        <h3 class="text-center mt-4" style="color: #28df99">Produk</h3>
        <div class="row mt-2" style="margin-left: 90px !important">
          <div v-for="e in items" v-bind:key="e.id">
            <router-link
              :to="'/Produk/' + e.product_key"
              style="text-decoration: none !important"
            >
              <div
                class="card text-center"
                style="width: 13rem; margin: 10px; border-radius: 10px"
              >
                <img
                  style="height: 150px; width: 150px; margin-left: 30px"
                  class="card-img-top"
                  :src="url+e.img1"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h7 class="card-title" style="color: #28df99">
                    {{ e.product_name }}
                  </h7>
                  <p class="card-text">Rp.{{ e.product_price }}</p>
                  <center>
                    <span
                      ><i
                        class="fas fa-shopping-cart"
                        style="color: #28df99"
                      ></i
                    ></span>
                  </center>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="mt-5"></div>
      </div>
    </div>
    <Footer />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import Found from "../components/sNotFound";
export default {
  components: {
    Footer,
    Found
  },
  data() {
    return {
      iProfil: "http://localhost:8000/api/v1/mediastore/logoadjt.png",
      url:"http://localhost:8000/api/v1/src/",
      iBanner:'',
      name:'',
      address:'',
      tlp:'',
      desc:'',
      addrs:'',
      count:'',
      items: [],
      main:false,
      found:false,
      loading:false
    };
  },
  mounted() {
    this.loading = true
    var bodyFormData = new FormData();
    bodyFormData.append("NameStore", this.$route.params.store);
    axios({
      method: "post",
      url: `${this.$api}view-store`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      console.log(response);
      if (response.data.MESSAGE == "SUCCESS") {
        var profil = response.data.STORE;
        var produk = response.data.PRODUK;
        var i = 0;
        for(i = 0; i<profil.length; i++){
         this.name = profil[i].name
         this.desc = profil[i].description
         this.tlp  = profil[i].telephone
         this.addrs = profil[i].address
         var b = profil[i].imgBanner
        }
        //console.log(this.profils.name)
        var src = "http://localhost:8000/api/v1/mediastore/"+b;
        this.iBanner = src
        this.count = response.data.COUNT
        this.profils = profil;
        this.items = produk;
        this.main = true
        this.loading = false
      }else if(response.data.MESSAGE == "ERROR"){
        this.found = true
        this.loading = false
      }
    });
  },
};
</script>
<style scoped>
.borderless td,
.borderless th {
  border: none !important;
}
</style>