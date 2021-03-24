<template>
  <div>
    <v-overlay :value="loading" :opacity="1" color="#fff">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>

    <v-overlay :value="iShow" :opacity="0.8" @click="close()">
      <div class="card">
        <img :src="urlform" class="res-img" @click="close()" />
      </div>
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
      </div>
    </div>

    <div class="my-small-container single-product">
      <div class="my-row overflow-auto">
        <div class="my-col-2" v-for="e in datas" :key="e">
          <!-- FIRST IMAGE -->
          <img
            style="border-radius: 15px"
            :src="url + e.img1"
            width="100%"
            id="ProductImg"
          />
          <!-- //main -->
          <div class="row mt-3">
            <img
              class="ml-3 res-img"
              style="border-radius: 13px;width:20%;"
              :src="url + img2"
              width="20%"
              id="ProductImg"
              @click="zoomImg(e.img2)"
            />

            <img
              class="ml-4"
              style="border-radius: 13px"
              :src="url + e.img3"
              width="20%"
              id="ProductImg"
              @click="zoomImg(e.img3)"
            />
            <img
            class="ml-4"
            style="border-radius: 13px"
            :src="url+e.img4"
            width="20%"
            id="ProductImg"
            @click="zoomImg(e.img4)"
          />
          <img
            class="ml-3 fam"
            style="border-radius: 13px"
            :src="url+e.img5"
            width="20%"
            id="ProductImg"
            @click="zoomImg(e.img5)"
          />
          </div>
        </div>

        <div class="my-col-2 overflow-auto" style="height:38rem; " v-for="data in datas" v-bind:key="data.id">
          <p>Kategori / {{ data.category }}</p>
          <h2>{{ data.product_name }}</h2>
          <span @click="store(data.store_name)">{{ data.store_name }}</span>
          <h4>Rp.{{ data.product_price }}</h4>
          <b-textarea
            v-model="description"
            placeholder="Catatan Untuk Penjual"
            class="txt-area-1 form-control"
          >
          </b-textarea>
          <!-- <img src="../assets/images/wapng.png" style="width:50px !important"> -->
          <b-textarea
            v-model="v_address"
            placeholder="Alamat Lengkap"
            class="txt-area-2 form-control"
          >
          </b-textarea>
          <p v-show="alertAddress" style="color: red; font-size: 13px; margin:0px !important">
            * Mohon Isi Alamat Lengkap!
          </p>
          <div style="height: 10px"></div>
          <div
            style="
              margin-top: 15px !important;
              background: white;
              border-style: solid;
              border-width: thin;
              border-radius: 15px;
              border-color: #dddddd !important;
              height: 35px !important;
              width: 180px !important;
              margin: 0px !important;
            "
          >
            <p class="text-center pwa">
              <img
                src="../assets/images/wapng.png"
                style="margin-bottom: 2px; width: 28px !important"
              />
              <a href="https://api.whatsapp.com/send?phone=6285740151761&text=Apakah Produk Ini Tersedia?">{{data.telephone}}</a>
            </p>
          </div>
          <Button @click="Buy()" class="btn">Pesan</Button>
          <h3>Deskripsi</h3>
          <div class="overflow-auto">
            <div style=" white-space: pre-line">
              {{ data.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components:{
 
  },
  data() {
    return {
      id: "",
      username: "",
      description: "",
      v_address: "",
      alertAddress: false,
      datas: [],
      loading: false,
      url: "http://localhost:8000/api/v1/src/",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      iShow: false,
      urlform: "",
      mItem:true
    };
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
    },
    zoomImg(props) {
      this.iShow = true;
      var src = "http://localhost:8000/api/v1/src/" + props;
      this.urlform = src;
      console.log(props);
    },
    close() {
      this.iShow = false;
    },
    store(e) {
      var url = `${this.$app}s/`+ e;
      window.location.href = url;
    },
    setProduct(data) {
      this.datas = data;
    },
    async Buy() {
      if(localStorage.getItem("role_user") == "SELLER"){
                    this.$router.replace({ name: "Dashboard" });
       
      }else{
      var i = 0;
      var description = this.description;
      let dscVal = "";
      if (description == "") {
        dscVal = "Kosong";
      } else {
        dscVal = this.description;
      }
      for (i = 0; i < this.datas.length; i++) {
        var store_id = this.datas[i].store_id;
        var store_name = this.datas[i].store_name;
        var product_name = this.datas[i].product_name;
        var product_price = this.datas[i].product_price;
        var address = this.datas[i].address;
        var img1 = this.datas[i].img1;
        var telephone = this.datas[i].telephone;
      }
      if (!this.v_address) {
        this.alertAddress = true;
      } else {
        var bodyFormData = new FormData();
        bodyFormData.append("visitor_id", this.id);
        bodyFormData.append("store_id", store_id);
        bodyFormData.append("store_name", store_name);
        bodyFormData.append("product_name", product_name);
        bodyFormData.append("product_price", product_price);
        bodyFormData.append("product_key", this.$route.params.product_key);
        bodyFormData.append("img1", img1);
        bodyFormData.append("description", dscVal);
        bodyFormData.append("seller_telephone", telephone);
        bodyFormData.append(
          "visitor_telephone",
          localStorage.getItem("telephone")
        );
        bodyFormData.append("visitor_name", localStorage.getItem("username"));
        bodyFormData.append("address_seller", address);
        bodyFormData.append("address_customer", this.v_address);

        if (this.id == null) {
          this.$router.replace({ name: "Login" });
        } else {
          this.loading = true;
          await axios({
            method: "post",
            url: `${this.$api}buy`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(() => {
              this.loading = false;
              this.$router.replace({ name: "user" });
            })
        }
      }
      }
    },
  },
  mounted() {
    //this.loading = true;
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
     this.role = localStorage.getItem("role_user");
    axios
      .get(`${this.$api}Detail/` + this.$route.params.product_key)
      .then((response) => {
        var i = 0;
        var data = response.data;
        this.setProduct(response.data);
        for (i = 0; i < data.length; i++) {
          var img1 = data[i].img1;
          var img2 = data[i].img2;
          var img3 = data[i].img3;
          var img4 = data[i].img4;
          var img5 = data[i].img5;
        }
        console.log(img1, img2, img3, img4, img5);
        this.img1 = img1;
        this.img2 = img2;

        console.log(response);
      });
  },
};
</script>
<style scoped>
.overflow-auto::-webkit-scrollbar {
  display: none;
}
.overflow-auto{
   -ms-overflow-style: none; 
  scrollbar-width: none;  
}
.btn {
  margin: 0px !important;
  margin-top: 15px !important;
}
.txt-area-1 {
  width: 25rem;
  height: 6rem;
}
.txt-area-2 {
  margin-top: 10px;
  width: 25rem;
  height: 3rem;
}
.pwa {
  margin-top: 3px;
}
.res-img{
  width: 500px;
}
@media only screen and (max-width: 800px) {
  .txt-area-1 .txt-area-2 {
    width: 20rem;
  }
}
@media only screen and (max-width: 600px) {
  .txt-area-1 .txt-area-2 {
    width: 17rem;
  }
}
@media only screen and (max-width:600px) {
    .res-img{
        width:50%;
        margin-left:100px;
      }
      .card{
        background: transparent;
      }
}
</style>