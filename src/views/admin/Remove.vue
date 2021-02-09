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
          <div></div>
        </div>
      </header>
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
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/admin/NavBar";
import axios from "axios";

export default {
  components: {
      NavBar
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
