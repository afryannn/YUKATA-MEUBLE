<template>
  <div>
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
              style="
                background-position: center;
                background-size: cover;
                background-image: url(https://i.pinimg.com/originals/df/6c/f3/df6cf34bde9aac77b3629846f6eaf481.jpg);
              "
            >
              <div class="container text-center">
                <h1 style="color:#28df99;">Gambar Banner</h1>
                <input type="file" class="text-center" style="width: 100px" />
              </div>
            </div>

            <div class="overflow-auto">
              <div class="container">
                <div class="card" style="height: 7rem">
                  <div class="row mt-1">
                    <div class="col text-center">
                      <img
                        class="rounded-circle"
                        :src="this.iProfil"
                        width="23%"
                      />
                    </div>
                    <div class="col">
                      <b><p style="color:#28df99;">Gambar Profil</p></b>
                      <input type="file" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="card">
                  <div class="row">
                    <div class="col text-center">
                      <b><p style="color:#28df99;">Nama Toko</p></b>
                      <input
                        type="text"
                        placeholder="Masukan Nama"
                        class="text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="card">
                  <div class="row">
                    <div class="col text-center">
                      <b><p style="color:#28df99;">Alamat</p></b>
                      <input
                        type="text"
                        placeholder="Masukan Alamat"
                        class="text-center"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="container text-center">
                <div class="card" style="height: 10rem">
                  <b><p style="color:#28df99;">Deskripsi</p></b>
                  <textarea
                    class="text-center"
                    placeholder="Masukan Deskripsi"
                    style="height: 100%"
                  >
                  </textarea>
                </div>
                <input
                  style="margin-top:25px;"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Saya Setuju Dengan Policy</label><br />
                <button
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
import Nav from "../../components/admin/component/Nav";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      iProfil: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>