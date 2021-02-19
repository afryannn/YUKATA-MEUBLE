<template>
  <v-container grid-list-xs>
    <div class="pd">
      <v-card class="mx-auto" max-width="600">
        <v-container>
          <v-row class="mb-3">
            <v-col md="8" offset-md="2">
              <p
                style="
                  color: #4eb883;
                  font-weight: bold;
                  font-size: 20px;
                  margin-top: 18px;
                "
              >
                Buat Produk
              </p>
              <form lazy-validation ref="form" v-on:submit.prevent>
                <v-text-field
                  class="text-green"
                  v-model="valProductName"
                  label="Nama Produk"
                ></v-text-field>
                <p v-show="eProduct" style="color: red; font-size: 13px">
                  * Nama Produk Tidac Boleh Kosong!
                </p>
                <select class="custom-select shadow-none" v-model="valSelec">
                  <option value="">Kategori</option>
                  <option
                    v-for="categor in categors"
                    v-bind:key="categor.id"
                    :value="categor.category"
                  >
                    {{ categor.category }}
                  </option>
                </select>
                <p v-show="eSelec" style="color: red; font-size: 13px">
                  * Kategori Kosong!
                </p>
                <compProduk v-show="this.completeProduk"
                 :NamaProduk="this.valProductName" 
                 :Kategori="this.valSelec"
                 ></compProduk>
                <v-btn
                  v-show="this.btnlanjut"
                  class="mr-4 btn-green"
                  @click="go()"
                  style="margin-top: 20px"
                  >Lanjut</v-btn
                >
                <v-btn
                   v-show="this.btnKembali"
                  @click="toCompMain()"
                  style="
                    margin-top: 20px;
                    background: none;
                    box-shadow: none;
                    color: #4eb883;
                  "
                  >Kembali</v-btn
                >
              </form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import compProduk from "../../components/admin/CompleteProduk"

export default {
  props:["NamaProduk","Kategori"],
  components:{
    compProduk
  },
  data() {
    return {
      btnlanjut:true,
      btnKembali:true,
      categors: [],
      valProductName: "",
      valSelec: "",
      eProduct: false,
      eSelec: false,
      compProduk:false,
      completeProduk:false
    };
  },
  methods: {
    go() {
      if (!this.valProductName) {
        this.eProduct = true;
      } else {
        if (!this.valSelec) {
          this.eProduct = false;
          this.eSelec = true;
        } else {
          this.eProduct = false;
          this.eSelec = false;
          var bodyFormData = new FormData();
          bodyFormData.append("user_id", localStorage.getItem("user-id"));
          bodyFormData.append("nama_produk", this.valProductName);
          bodyFormData.append("kategori", this.valSelec);
          axios({
            method: "post",
            url: `${this.$api}create_produk`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((response) => {
              this.btnlanjut = false
              this.btnKembali = false
              this.completeProduk = true
              localStorage.setItem("product-key",response.data.KEY_PRODUCT)
            })
            .catch(function (response) {
              console.log(response);
            });
        }
      }
    },
    toCompMain() {
      this.$router.replace({ name: "Dashboard" });
    },
    setKategori(data) {
      this.categors = data;
    },
  },
  mounted() {
    axios({
      method: "get",
      url: `${this.$api}categor`,
    })
      .then((response) => {
        this.setKategori(response.data.DATA);
      })
      .catch(function () {});
  },
};
</script>
<style scoped>
</style>