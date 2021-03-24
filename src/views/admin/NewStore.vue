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
          <span class="t-spn" style="font-size: 10px">SELLER YUKATA</span>
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
          <p>Buat Toko</p>
        </div>
        <div class="fr-social-icons">
          <span class="ti-bell"></span>
          <span class="ti-comment"></span>
          <div></div>
        </div>
      </header>

      <!--------------------START CONTENT---------------------->
      <main>
        <div class="card">
          <div class="card body overflow-auto" style="height: 100%">
            <div
              class="jumbotron jumbotron-fluid"
              style="background-position: center; background-size: cover"
              :style="{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.iBanner}')`,
              }"
            >
              <div class="container text-center">
                <h1 style="color: #28df99">Gambar Banner</h1>
                <input
                  type="file"
                  class="text-center"
                  style="width: 100px"
                  @change="onFileBanner"
                />
              </div>
            </div>
            <p
              v-show="this.err.eBanner"
              class="text-center"
              style="color: red; font-size: 8px"
            >
              * Gambar Banner Harus Berformat PNG,JPG,JPEG!!
            </p>

            <div class="overflow-auto">
              <div class="container">
                <div
                  class="card"
                  style="box-shadow: 1px 1px 4px #cdd0cb; height: 7rem"
                >
                  <div class="row mt-1">
                    <div class="col text-center">
                      <img
                        class="rounded-circle"
                        :src="this.iProfil"
                        width="15%"
                      />
                    </div>
                    <div class="col">
                      <b><p style="color: #28df99">Gambar Profil</p></b>
                      <input type="file" @change="onFileProfil" />
                    </div>
                  </div>
                </div>
              </div>
              <p
                v-show="this.err.eProfil"
                class="text-center"
                style="color: red; font-size: 8px"
              >
                * Gambar Profil Harus Berformat PNG,JPG,JPEG!!
              </p>

              <div class="container">
                <div class="card" style="box-shadow: 1px 1px 4px #cdd0cb">
                  <div class="row">
                    <div class="col text-center">
                      <b><p style="color: #28df99">Nama Toko</p></b>
                      <input
                        v-model="name"
                        type="text"
                        placeholder="Masukan Nama"
                        class="text-center"
                      />
                      <p
                        v-show="this.err.eName"
                        style="color: red; font-size: 8px"
                      >
                        * Nama Toko Harus Diisi!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="card" style="box-shadow: 1px 1px 4px #cdd0cb">
                  <div class="row">
                    <div class="col text-center">
                      <b><p style="color: #28df99">Alamat</p></b>
                      <input
                        v-model="address"
                        type="text"
                        placeholder="Masukan Alamat"
                        class="text-center"
                        style="width: 100%"
                      />
                      <p
                        v-show="this.err.eAddress"
                        style="color: red; font-size: 8px"
                      >
                        * Alamat Toko Harus Diisi!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container text-center">
                <div
                  class="card shadow"
                  style="height: 10rem; box-shadow: 1px 1px 4px #cdd0cb"
                >
                  <b><p style="color: #28df99">Deskripsi</p></b>
                  <textarea
                    v-model="desc"
                    class="text-center"
                    placeholder="Masukan Deskripsi"
                    style="height: 100%; outline: none"
                  >
                  </textarea>
                  <p v-show="this.err.eDesc" style="color: red; font-size: 8px">
                    * Deskripsi Toko Harus Diisi!!
                  </p>
                </div>
                <input
                  style="margin-top: 25px"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />

                <label>Klik Untuk Melanjutkan</label><br />
                <button
                  @click="store()"
                  style="
                    color: white;
                    margin-top: 8px;
                    height: 33px;
                    width: 80px;
                    border-radius: 5px;
                    background: #28df99;
                  "
                >
                  Buat
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!--------------------END CONTENT---------------------->
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Nav from "../../components/admin/component/Nav";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      iProfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU",
      iBanner:
        "https://i.pinimg.com/originals/df/6c/f3/df6cf34bde9aac77b3629846f6eaf481.jpg",
      err: {
        eBanner: false,
        eProfil: false,
        eName: false,
        eTlp: false,
        eAddress: false,
        eDesc: false,
      },
      select: [{ banner: null }, { profil: null }],
      name: "",
      tlp: "",
      address: "",
      desc: "",
      loading:false
    };
  },
  methods: {
    onFileBanner(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.banner = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.iBanner = e.target.result;
          this.err.eBanner = false;
          console.log(e);
        };
      } else {
        this.err.eBanner = true;
      }
    },
    onFileProfil(event) {
      let image = event.target.files[0];
      if (
        image["type"] === "image/jpeg" ||
        image["type"] == "image/jpg" ||
        image["type"] == "image/png"
      ) {
        this.select.profil = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.iProfil = e.target.result;
          this.err.eProfil = false;
          console.log(this.eBanner);
        };
      } else {
        this.err.eProfil = true;
      }
    },
    store() {
     this.loading = true
     var name = "";
      var address = "";
      var desc = "";
      if (!this.name) {
        this.err.eName = true;
        name = "NULL";
      } else {
        this.err.eName = false;
        name = this.name;
      }
      if (!this.address) {
        this.err.eAddress = true;
        address = "NULL";
      } else{
        this.err.eAddress = false;
        address = this.address;
      }
      if (!this.desc) {
        this.err.eDesc = true;
        desc = "NULL";
      } else {
        this.err.eDesc = false;
        desc = this.desc;
      }
      var bodyFormData = new FormData();
      bodyFormData.append("user_id", localStorage.getItem('user-id'));
      bodyFormData.append("img_profil", this.select.profil);
      bodyFormData.append("img_banner", this.select.banner);
      bodyFormData.append("nama_toko", name);
      bodyFormData.append("telephone",localStorage.getItem('telephone'));
      bodyFormData.append("deskripsi", desc);
      bodyFormData.append("alamat", address);
      axios({
        method: "post",
        url: `${this.$api}create_store`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(() => {
           this.loading = false
           this.$router.replace({ name: "Dashboard" });
        })
    },
  },

  mounted() {},
};
</script>
<style scoped>
</style>