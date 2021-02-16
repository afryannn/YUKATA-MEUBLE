<template>
  <div class="container">
    <v-overlay :value="loading" :opacity="0.90">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
    <div class="card" style="width: 100%">
      <div class="card-body overflow-auto">
        <table
          id="example"
          class="table table-striped table-bordered \"
          style="width: 100%; overflow-x: scroll"
        >
          <thead>
            <tr>
              <th>Gambar</th>
              <th>Nama Produk</th>
              <th>Deskripsi</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Ubah</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="e in items" v-bind:key="e.id">
              <td>
                <img
                  @click="overlay(e.product_key)"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  style="width: 100px; height: 100px"
                />
              </td>
              <td>
                <input type="text" v-model="e.product_name" />
              </td>
              <td>
                <input type="text" name="names" v-model="e.description" />
              </td>
              <td>
                <input type="number" name="names" v-model="e.product_price" />
              </td>
              <td><input type="number" name="names" v-model="e.stock" /></td>
              <td>
                <center>
                  <button
                    type="button"
                    @click="
                      StartUpdate(
                        e.product_key,
                        e.product_name,
                        e.description,
                        e.product_price,
                        e.stock
                      )
                    "
                    style="
                      background: #28df99;
                      width: 100px;
                      outline: none !important;
                      border-radius: 5px;
                      height: 35px;
                    "
                  >
                    <i class="far fa-edit" style="color: white"></i>
                    <span style="margin-left: 6px; color: white">Simpan</span>
                  </button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <v-overlay :value="screenOverlay">
        <v-overlay :value="loading2" :opacity="0.90">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
        <div
          class="card"
          style="
            width: 500px !important;
            height: 550px !important;
            margin-top: 70px;
          "
        >
          <div
            class="card-header"
            style="background: #28df99; border-color: #28df99"
            @click="closeOverlay()"
          >
            Pengaturan Media
            <span class="float-right" @click="closeOverlay">X</span>
          </div>
          <div class="card-body overflow-auto" style="height: 100% !important">
            <div class="card-img-p">
              <div class="row">
                <div class="col-6" style="padding: 0 !important">
                  <img :src="prevImg1" class="fr-img-thumbnail" />
                </div>
                <div class="col" style="padding: 0 !important">
                  <div class="button-wrapper">
                    <span class="label">img 1</span>
                    <input
                      type="file"
                      name="upload"
                      @change="onFileSelected"
                      id="upload"
                      class="upload-box"
                      placeholder="Upload File"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p v-show="this.eImg1" style="color: red; font-size: 8px">
              * Gambar Harus Berformat PNG,JPG,JPEG!!
            </p>

            <div class="card-img-p">
              <div class="row">
                <div class="col-6" style="padding: 0 !important">
                  <img :src="prevImg1" class="fr-img-thumbnail" />
                </div>
                <div class="col" style="padding: 0 !important">
                  <div class="button-wrapper">
                    <span class="label">img 2</span>
                    <input
                      type="file"
                      name="upload"
                      @change="onFileSelected2"
                      id="upload"
                      class="upload-box"
                      placeholder="Upload File"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p v-show="this.eImg2" style="color: red; font-size: 8px">
              * Gambar Harus Berformat PNG,JPG,JPEG!!
            </p>

            <div class="card-img-p">
              <div class="row">
                <div class="col-6" style="padding: 0 !important">
                  <img :src="prevImg1" class="fr-img-thumbnail" />
                </div>
                <div class="col" style="padding: 0 !important">
                  <div class="button-wrapper">
                    <span class="label">img 3</span>
                    <input
                      type="file"
                      name="upload"
                      @change="onFileSelected3"
                      id="upload"
                      class="upload-box"
                      placeholder="Upload File"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p v-show="this.eImg3" style="color: red; font-size: 8px">
              * Gambar Harus Berformat PNG,JPG,JPEG!!
            </p>

            <div class="card-img-p">
              <div class="row">
                <div class="col-6" style="padding: 0 !important">
                  <img :src="prevImg1" class="fr-img-thumbnail" />
                </div>
                <div class="col" style="padding: 0 !important">
                  <div class="button-wrapper">
                    <span class="label">img 4</span>
                    <input
                      type="file"
                      name="upload"
                      @change="onFileSelected4"
                      id="upload"
                      class="upload-box"
                      placeholder="Upload File"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p v-show="this.eImg4" style="color: red; font-size: 8px">
              * Gambar Harus Berformat PNG,JPG,JPEG!!
            </p>

            <div class="card-img-p">
              <div class="row">
                <div class="col-6" style="padding: 0 !important">
                  <img :src="prevImg1" class="fr-img-thumbnail" />
                </div>
                <div class="col" style="padding: 0 !important">
                  <div class="button-wrapper">
                    <span class="label">img 5</span>
                    <input
                      type="file"
                      name="upload"
                      @change="onFileSelected5"
                      id="upload"
                      class="upload-box"
                      placeholder="Upload File"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p v-show="this.eImg5" style="color: red; font-size: 8px">
              * Gambar Harus Berformat PNG,JPG,JPEG!!
            </p>

            <button
              @click="imgUpdate()"
              class="bg-warning"
              style="
                margin-top: 8px;
                height: 33px;
                width: 80px;
                border-radius: 5px;
                background: red;
              "
            >
              Simpan
            </button>
          </div>
        </div>
      </v-overlay>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      keyProduct: "",
      iImg: [
        { img1: "" },
        { img2: "" },
        { img3: "" },
        { img4: "" },
        { img5: "" },
      ],
      prev: [
        { img1: "" },
        { img2: "" },
        { img3: "" },
        { img4: "" },
        { img5: "" },
      ],
      select: [
        { img1: null },
        { img2: null },
        { img3: null },
        { img4: null },
        { img5: null },
      ],
      dialog: false,
      screenOverlay: false,
      prevImg1: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      eImg1: false,
      eImg2: false,
      eImg3: false,
      eImg4: false,
      eImg5: false,
      loading: false,
      loading2: false,
      slct: null,
    };
  },
  methods: {
    onFileSelected(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.img1 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prev.img1 = e.target.result;
          this.eImg1 = false;
        };
      } else {
        this.eImg1 = true;
      }
    },
    onFileSelected2(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.img2 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prev.img2 = e.target.result;
          this.eImg2 = false;
        };
      } else {
        this.eImg2 = true;
      }
    },
    onFileSelected3(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.img3 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prev.img3 = e.target.result;
          this.eImg3 = false;
        };
      } else {
        this.eImg3 = true;
      }
    },
    onFileSelected4(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.img4 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prev.img4 = e.target.result;
          this.eImg4 = false;
        };
      } else {
        this.eImg4 = true;
      }
    },
    onFileSelected5(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.img5 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prev.img5 = e.target.result;
          this.eImg5 = false;
        };
      } else {
        this.eImg5 = true;
      }
    },

    async imgUpdate() {
      let vImg1 = "";
      let vImg2 = "";
      let vImg3 = "";
      let vImg4 = "";
      let vImg5 = "";
      if (!this.select.img1) {
        vImg1 = this.iImg.img1;
        console.log(vImg1);
        console.log("No Update");
      } else {
        vImg1 = this.select.img1;
        console.log(vImg1);
        console.log("Updated");
      }
      if (!this.select.img2) {
        vImg2 = this.iImg.img2;
        console.log("No Update");
      } else {
        vImg2 = this.select.img2;
        console.log("Updated" + vImg2);
      }
      if (!this.select.img3) {
        vImg3 = this.iImg.img3;
        console.log("No Update");
      } else {
        vImg3 = this.select.img3;
        console.log("Updated" + vImg3);
      }
      if (!this.select.img4) {
        vImg4 = this.iImg.img4;
        console.log("No Update");
      } else {
        vImg4 = this.select.img4;
        console.log("Updated" + vImg4);
      }
      if (!this.select.img5) {
        vImg5 = this.iImg.img5;
        console.log("No Update");
      } else {
        vImg5 = this.select.img5;
        console.log("Updated" + vImg5);
      }
      this.loading2 = true
      var bodyFormData = new FormData();
      bodyFormData.append("key_produk", this.keyProduct);
      bodyFormData.append("img1", vImg1);
      bodyFormData.append("img2", vImg2);
      bodyFormData.append("img3", vImg3);
      bodyFormData.append("img4", vImg4);
      bodyFormData.append("img5", vImg5);
      bodyFormData.append("type", "MEDIA");
      await axios({
        method: "post",
        url: `${this.$api}update-produk`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(() => {
        this.loading2 = false
      });
    },
    async overlay(pKey) {
      this.loading = true
      var bodyFormData = new FormData();
      bodyFormData.append("product_key", pKey);
      await axios({
        method: "post",
        url: `${this.$api}uImg`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        this.loading = false
        this.keyProduct = response.data.ITEM.product_key;
        this.iImg.img1 = response.data.ITEM.img1;
        this.iImg.img2 = response.data.ITEM.img2;
        this.iImg.img3 = response.data.ITEM.img3;
        this.iImg.img4 = response.data.ITEM.img4;
        this.iImg.img5 = response.data.ITEM.img5;
        this.screenOverlay = true;
      });
    },
    closeOverlay() {
      this.screenOverlay = false;
    },
    StartUpdate(pKey, pName, pDesc, pPrice, pStok) {
      this.loading = true
      var bodyFormData = new FormData();
      bodyFormData.append("key_produk", pKey);
      bodyFormData.append("nama_produk", pName);
      bodyFormData.append("deskripsi", pDesc);
      bodyFormData.append("harga", pPrice);
      bodyFormData.append("stok", pStok);
      bodyFormData.append("type", "DATA");
      axios({
        method: "post",
        url: `${this.$api}update-produk`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(() => {
         this.loading = false
      });
    },
  },
  mounted() {
    this.loading = true
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", localStorage.getItem("user-id"));
    axios({
      method: "post",
      url: `${this.$api}all-store-produk`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        this.loading = false
        this.items = response.data.DATA;
      })
  },
};
</script>
<style scoped>
.upload-box {
  height: 20px !important;
}
.card-img-p {
  margin-top: 20px;
  width: 100%;
  height: 85px;
  border-radius: 5px;
  background: #effdf4b7;
}
.fr-img-thumbnail {
  height: 70px;
  width: 80px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 5px;
}
.input-img1 {
  width: 100px !important;
  height: 10px !important;
}

.form-control-file {
  width: 80%;
}
.button-wrapper {
  padding: 0 !important;
  position: relative;
  width: 80px;
  height: 10px !important;
  text-align: center;
  margin: 20% auto;
}

.button-wrapper span.label {
  position: relative;
  z-index: 0;
  display: inline-block;
  width: 100%;
  background: #28df99;
  cursor: pointer;
  color: #fff;
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 12px;
}

#upload {
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 20px !important;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>