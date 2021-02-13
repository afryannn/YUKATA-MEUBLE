<template>
  <div>
    <h2 class="title">Daftar Produk</h2>
    <div class="my-small-container">
      <div class="my-row">
        <div class="my-col-4 d-flex justify-content-center" v-for="data in datas" :key="data.id">
          <div
            class="card"
            style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <router-link
              :to="'/Produk/' + data.product_key"
              style="text-decoration: none !important"
            >
              <div class="card-body">
                <img src="../../assets/images/mejatv2.png" />
                <h6
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      datas: [],
    };
  },
  methods: {
    setProduct(data) {
      this.datas = data;
    },
  },
  mounted() {
    axios
      .get(`${this.$api}list-produk`)
      .then((response) => this.setProduct(response.data.DATA))
      .catch((error) => console.log("Fail : ", error));
  },
};
</script>
