<template>
  <div>
    <v-overlay :value="loading" :opacity="1" color="#fff">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
    <h2 class="title mt-5">Produk Terbaru</h2>
    <div class="my-small-container">
      <div class="my-row">
        <div
          class="my-col-4 d-flex justify-content-center"
          v-for="data in datas"
          :key="data.id"
        >
          <div
            class="card"
            style="width: 15rem; box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <router-link
              :to="'/Produk/' + data.product_key"
              style="text-decoration: none !important"
            >
              <div class="card-body">
                <img :src="url + data.img1" />
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      datas: [],
      loading: false,
      url:`${this.$src}`,
    };
  },
  methods: {
    setProduct(data) {
      this.datas = data;
    },
  },
  mounted() {
    this.loading = true;
    axios
      .get(`${this.$api}new-item`)
      .then(
        (response) => this.setProduct(response.data.DATA),
        (this.loading = false)
      );
  },
};
</script>
