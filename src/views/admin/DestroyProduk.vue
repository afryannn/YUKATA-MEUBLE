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
          <div class="row">
          <div v-for="e in items" v-bind:key="e.id">
            <div class="card" style="width: 13rem; margin: 10px">
              <img
                class="card-img-top"
                src="../../assets/images/mejatv2.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{ e.product_name }}</h5>
                <p class="card-text">Harga : {{ e.product_price }}</p>
                <p class="card-text">Kategori : {{ e.category }}</p>
                <center>
                  <button
                    @click="go(e.product_key)"
                    style="
                      width: 150px;
                      background: red;
                      height: 35px;
                      border-radius: 5px;
                    "
                  >
                    Hapus
                  </button>
                </center>
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
import axios from 'axios'
export default {
  components: {
    Nav,
    
  },
    data() {
    return {
      items: [],
    };
  },
  methods: {
    go(data) {
      var bodyFormData = new FormData();
      bodyFormData.append("key_product", data);
      axios({
        method: "post",
        url: `${this.$api}delete-produk`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(() => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(function () {});
    },
  },
  mounted() {
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", localStorage.getItem("user-id"));
    axios({
      method: "post",
      url: `${this.$api}all-store-produk`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        this.items = response.data.DATA;
      })
      .catch(function () {});
  },
};
</script>
<style scoped>
</style>