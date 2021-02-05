<template>
  <div>
    <!-- <v-text-field
      class="text-green"
      v-model="valProductName"
      label="Deskripsi"
    ></v-text-field>
    <p v-show="eProduct" style="color: red; font-size: 13px">
      * Nama Produk Tidac Boleh Kosong!
    </p>
    <v-text-field
      class="text-green"
      v-model="valProductName"
      label="Harga"
    ></v-text-field>
    <p v-show="eProduct" style="color: red; font-size: 13px">
      * Nama Produk Tidac Boleh Kosong!
    </p>
    <v-text-field
      class="text-green"
      v-model="valProductName"
      label="Stok"
    ></v-text-field> -->

    <p style="margin-top: 10px">Gambar 1</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-5" style="padding: 0 !important">
          <img :src="prevImg1" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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
    <p v-show="eImg.img1" style="color: red; font-size: 13px">
      * Gambar 1 Tidak Boleh Kosong
    </p>
    <p style="margin-top: 10px">Gambar 2</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-5" style="padding: 0 !important">
          <img :src="prevImg1" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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

    <p style="margin-top: 10px">Gambar 3</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-5" style="padding: 0 !important">
          <img :src="prevImg1" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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

    <p style="margin-top: 10px">Gambar 4</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-5" style="padding: 0 !important">
          <img :src="prevImg1" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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

    <p style="margin-top: 10px">Gambar 5</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-5" style="padding: 0 !important">
          <img :src="prevImg1" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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
    <!-- <p v-show="eProduct" style="color: red; font-size: 13px">
      * Nama Produk Tidac Boleh Kosong!
    </p>
    <p v-show="eSelec" style="color: red; font-size: 13px">
      * Kategori Kosong!
    </p> -->
    <v-btn class="mr-4 btn-green" @click="go()" style="margin-top: 20px"
      >Simpan</v-btn
    >
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      valDeskripsi: "",
      valHarga: "",
      valStock: "",
      valImg: [
        {Img1: "" },
        {Img2: "" },
        {Img3: "" },
        {Img4: "" },
        {Img5: "" },
      ],
      eImg: [
        { eImg1: false },
        { eImg2: false },
        { eImg3: false },
        { eImg4: false },
        { eImg5: false },
      ],
      allow:[
        {ifAllow1:false},
        {ifAllow2:false},
        {ifAllow3:false},
        {ifAllow4:false},
        {ifAllow5:false},
      ],
      prevImg1: "https://picsum.photos/id/11/500/300",
      selectedFile: null,
      ifAllow: false,
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
          this.eSelec = false;
        }
      }
    },
    //GET FILE CODE
    onFileSelected(event) {
      let image = event.target.files[0];
      if (image["type"] == "image/png") {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.allow.ifAllow1 = true;
        };
      } else {
        this.allow.ifAllow1 = false;
      }
    },
    onFileSelected2(event) {
      let image = event.target.files[0];
      if (image["type"] == "image/png") {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.ifAllow = false;
        };
      } else {
         this.allow.ifAllow2 = false;
      }
    },
    onFileSelected3(event) {
      let image = event.target.files[0];
      if (image["type"] == "image/png") {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.ifAllow = true;
        };
      } else {
        console.log("G");
      }
    },
    onFileSelected4(event) {
      let image = event.target.files[0];
      if (image["type"] == "image/png") {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.ifAllow = true;
        };
      } else {
        console.log("G");
      }
    },
    onFileSelected5(event) {
      let image = event.target.files[0];
      if (image["type"] == "image/png") {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.ifAllow = true;
        };
      } else {
        console.log("G");
      }
    },
    //END
    save() {
      // var bodyFormData = new FormData();
      // bodyFormData.append("PRODUCT_KEY", localStorage.getItem("product-key"));
      // bodyFormData.append("image", this.selectedFile, this.selectedFile.namei);
      // axios({
      //   method: "post",
      //   url: `${this.$api}seller_transaksi`,
      //   data: bodyFormData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // })
      //   .then((response) => {
      //     this.setTransaction(response.data.DATA);
      //   })
      //   .catch(function (response) {
      //     console.log(response);
      //   });
    },
  },
};
</script>
<style scoped>
.card-img-p {
  margin-top: 20px;
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background: #effdf4;
}
.fr-img-thumbnail {
  height: 80px;
  width: 90px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 5px;
}
.input-img1 {
  width: 100px !important;
  height: 10px !important;
}
.input-img1 label[for] {
  height: 40px;
  font-size: 10pt;
}
.form-control-file {
  width: 80%;
}
.button-wrapper {
  padding: 0 !important;
  position: relative;
  width: 80px;
  height: 30px;
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
  height: 40px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>