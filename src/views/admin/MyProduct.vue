<template>
  <div>
    <!--------------------NAVBAR---------------------->
    <input type="checkbox" id="sidebar-toggle" />
    <div class="fr-sidebar">
      <div class="fr-sidebar-header">
        <h3 class="fr-brand">
          <img src="../../assets/yktseller.png" width="13%" ><span class="t-spn ml-2" style="font-size: 13px">SELLER YUKATA</span>
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
          <h6 style="color: #28df99">Produk Toko</h6>
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
          <div class="card-body">
            <div class="my-small-container">
              <div class="my-row">
                <div
                  class="my-col-4 d-flex justify-content-center"
                  v-for="data in items"
                  :key="data.id"
                >
                  <div
                    class="card"
                    style="
                      width: 15rem;
                      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
                    "
                  >
                    <router-link
                      :to="'/Produk/' + data.product_key"
                      style="text-decoration: none !important"
                    >
                      <div class="card-body">
                        <img :src="img + data.img1" />
                        <h6
                          class="mt-2"
                          style="
                            color: #222831 !important;
                            font-weight: bold !important;
                          "
                        >
                          {{ data.product_name }}
                        </h6>
                        <p>{{ data.name }}<br />Rp.{{ data.product_price }}</p>
                  
                      </div>
                    </router-link>
                  </div>
                </div>
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
import axios from "axios";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      items: [],
      img: "",
    };
  },
  mounted() {
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", localStorage.getItem("user-id"));
    axios({
      method: "post",
      url: `${this.$api}all-store-produk`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      this.items = response.data.DATA;
      this.img = `${this.$api}src/`;
    });
  },
};
</script>
<style scoped>
.dot {
  height: 10px;
  width: 10px;
  background-color: #28df99;
  border-radius: 50%;
  display: inline-block;
}
</style>