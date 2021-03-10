<template>
  <div>
    <loading v-show="loading"></loading>
    <v-text-field
      class="text-green"
      v-model="valProductDesc"
      label="Deskripsi"
    ></v-text-field>
    <p v-show="eDesc" style="color: red; font-size: 13px">
      * Deskripsi Tidak Boleh Kosong!!
    </p>
    <v-text-field
      class="text-green"
      v-model="valProductPrice"
      label="Harga"
      type="number"
    ></v-text-field>
    <p v-show="ePrice" style="color: red; font-size: 13px">
      * Harga Tidak Boleh Kosong!!
    </p>
    <v-text-field
      class="text-green"
      v-model="valProductStock"
      label="Stok"
       type="number"
    ></v-text-field>
    <p v-show="eStock" style="color: red; font-size: 13px">* Stok Kosong!</p>
    <p style="margin-top: 10px">Gambar 1</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-6" style="padding: 0 !important">
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
    <p v-show="emptyImg1" style="color: red; font-size: 13px">
      * Gambar 1 Tidak Boleh Kosong!!
    </p>
    <p v-show="eImg1" style="color: red; font-size: 13px">
      * Gambar Harus Berformat PNG,JPG,JPEG!!
    </p>

    <p style="margin-top: 10px">Gambar 2</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-6" style="padding: 0 !important">
          <img :src="prevImg2" class="fr-img-thumbnail" />
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
    <p v-show="eImg2" style="color: red; font-size: 13px">
      * Gambar Harus Berformat PNG,JPG,JPEG!!
    </p>

    <p style="margin-top: 10px">Gambar 3</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-6" style="padding: 0 !important">
          <img :src="prevImg3" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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
    <p v-show="eImg3" style="color: red; font-size: 13px">
      * Gambar Harus Berformat PNG,JPG,JPEG!!
    </p>

    <p style="margin-top: 10px">Gambar 4</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-6" style="padding: 0 !important">
          <img :src="prevImg4" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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
    <p v-show="eImg4" style="color: red; font-size: 13px">
      * Gambar Harus Berformat PNG,JPG,JPEG!!
    </p>

    <p style="margin-top: 10px">Gambar 5</p>
    <div class="card-img-p">
      <div class="row">
        <div class="col-6" style="padding: 0 !important">
          <img :src="prevImg5" class="fr-img-thumbnail" />
        </div>
        <div class="col" style="padding: 0 !important">
          <div class="button-wrapper">
            <span class="label">File</span>
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
    <p v-show="eImg5" style="color: red; font-size: 13px">
      * Gambar Harus Berformat PNG,JPG,JPEG!!
    </p>

    <p v-show="nImg" style="color: red; font-size: 13px">
      * Mohon Lengkapi Gambar Yang Kosong!! 
    </p>

    <v-btn class="mr-4 btn-green" @click="Save()" style="margin-top: 20px"
      >Simpan</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";
import loading from '../loading';
export default {
  components:{
    loading
  },
  data() {
    return {
      loading:false,
      valDeskripsi: "",
      valHarga: "",
      valStock: "",
      eImg1: false,
      eImg2: false,
      eImg3: false,
      eImg4: false,
      eImg5: false,
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      img5: null,
      eDesc: false,
      ePrice: false,
      eStock: false,
      valProductDesc: "",
      valProductPrice: "",
      valProductStock: "",
      prevImg1: "https://picsum.photos/id/11/500/300",
      prevImg2: "https://picsum.photos/id/11/500/300",
      prevImg3: "https://picsum.photos/id/11/500/300",
      prevImg4: "https://picsum.photos/id/11/500/300",
      prevImg5: "https://picsum.photos/id/11/500/300",
      selectedFile: null,
      ifAllow: true,
      emptyImg1: false,
      ifEmpty: true,
      ifEmpty2: true,
      ifEmpty3: true,
      ifEmpty4: true,
      ifEmpty5: true,
      nImg : false
    };
  },
  methods: {
    //GET FILE CODE
    onFileSelected(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.img1 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg1 = e.target.result;
          this.eImg1 = false;
          this.ifEmpty = false;
        };
      } else {
        this.eImg1 = true;
        (this.ifAllow = false),
          (this.ifEmpty = false),
          (this.emptyImg1 = false);
      }
    },
    onFileSelected2(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.img2 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg2 = e.target.result;
          this.eImg2 = false;
          this.ifEmpty2 = false
        };
      } else {
        this.eImg2 = true;
        this.ifEmpty2 = false
      }
    },
    onFileSelected3(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.img3 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg3 = e.target.result;
          this.eImg3 = false;
          this.ifEmpty3 = false
        };
      } else {
        this.eImg3 = true;
        this.ifEmpty3 = false
      }
    },
    onFileSelected4(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.img4 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg4 = e.target.result;
          this.eImg4 = false;
          this.ifEmpty4 = false

        };
      } else {
        this.eImg4 = true;
        this.ifEmpty4 = false

      }
    },

    onFileSelected5(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.img5 = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.prevImg5 = e.target.result;
          this.eImg5 = false;
          this.ifEmpty5 = false
        };
      } else {
        this.eImg5 = true;
        this.ifEmpty5 = false

      }
    },
    //END
    async Save() {
      this.loading = true
      if(this.valProductDesc == ''){
        this.eDesc = true 
        this.loading = false
      }
      if(this.valProductPrice == ''){
        this.ePrice = true
        this.loading = false
      }
      if(this.valProductStock == ''){
        this.eStock = true
        this.loading = false
      }


      if (this.ifEmpty == true ||
          this.ifEmpty2 == true||
          this.ifEmpty3 == true ||
          this.ifEmpty4 ==true  ||
          this.ifEmpty5 == true
         ) {
        this.nImg = true;
        this.loading = false
      } else {
        this.emptyImg1 = false;
        if (
          this.eImg1 == true ||
          this.eImg2 == true ||
          this.eImg3 == true ||
          this.eImg4 == true ||
          this.eImg5 == true
        ) {
          console.log("Err");
        } else {
      
          var bodyFormData = new FormData();
          bodyFormData.append(
            "key_product",
            localStorage.getItem("product-key")
          );
          bodyFormData.append("deskripsi", this.valProductDesc);
          bodyFormData.append("harga", this.valProductPrice);
          bodyFormData.append("stok", this.valProductStock);
          bodyFormData.append("img1", this.img1);
          bodyFormData.append("img2", this.img2);
          bodyFormData.append("img3", this.img3);
          bodyFormData.append("img4", this.img4);
          bodyFormData.append("img5", this.img5);
          await axios({
            method: "post",
            url: `${this.$api}complete_produk`,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }).then((res) => {
            console.log(res.data)
            localStorage.removeItem("product-key");
            this.$router.replace({ name: "Dashboard" });
            this.loading = false
          })
          .catch(function (response) {
            console.log(response);
          });
        }
     

      }
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