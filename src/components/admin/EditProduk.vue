<template>
  <table
    id="example"
    class="table table-striped table-bordered"
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
          <router-link to="/Login">
            <img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              style="width: 100px; height: 100px"
            />
          </router-link>
        </td>
        <td>
          <input type="text" :value="e.product_name">
        </td>
        <td>
          <input type="text" name="names" v-model="e.description">
        </td>
        <td>{{ e.stock }}</td>
        <td>$320,800</td>
        <td>
          <center>
           <button type="button" @click="Pe()" class="btn btn-primary btn-xs">Normal</button>
          </center>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      m:{
        pr:[]
      },
    };
  },
  methods: {
    setData(data) {
      this.Items = data;
    },
    Pe(){
     
    }
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
<style>

</style>