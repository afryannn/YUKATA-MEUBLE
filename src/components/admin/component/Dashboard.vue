<template>
  <div>
    <div class="fr-dash-cards">
      <div class="fr-card-single">
        <div class="fr-card-body">
          <span class="ti-briefcase"></span>
          <div>
            <h5>Total Saldo</h5>
            <h4>Rp.500K</h4>
          </div>
        </div>
        <div class="fr-card-footer">
           
        </div>
      </div>

      <div class="fr-card-single">
        <div class="fr-card-body">
          <span class="ti-briefcase"></span>
          <div>
            <h5>Total Saldo</h5>
            <h4>Rp.500K</h4>
          </div>
        </div>
        <div class="fr-card-footer">
          <!-- <a href="">View All</a> -->
        </div>
      </div>

      <div class="fr-card-single">
        <div class="fr-card-body">
          <span class="ti-briefcase"></span>
          <div>
            <h5>Total Saldo</h5>
            <h4>Rp.500K</h4>
          </div>
        </div>
        <div class="fr-card-footer">
          <!-- <a href="">View All</a> -->
        </div>
      </div>
    </div>
    <section class="fr-recent">
      <div class="fr-activity-grid">
        <div
          class="fr-activity-card"
          style="box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2)"
        >
          <h3 style="color: #28df99">Transaksi</h3>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Pembeli</th>
                  <th>Produk</th>
                  <th>Deskripsi</th>
                  <th>Alamat</th>
                  <th>Harga</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in transactions" v-bind:key="data.id">
                  <td>{{ data.visitor_name }}</td>
                  <td>{{ data.product_name }}</td>
                  <td>{{ data.description }}</td>
                  <td>{{ data.address_customer }}</td>
                  <td>{{ data.product_price }}</td>
                  <td v-if="data.status == 'DI PROSES'">
                    <span class="badge success"> Di PROSES </span>
                  </td>
                  <td v-else>
                    <span class="badge success"> SELESAI </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="fr-summary-card">
          <router-link to="/ProdukRelease">
            <Button
              class="fr-btn-add-product"
              style="box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2)"
            >
              <p class="p-button-add" @click="formNewProduk()">
                <span>+ </span>Produk Baru
              </p>
            </Button>
          </router-link>
          <Button
            class="fr-btn-delete btn-danger"
            style="box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2)"
            @click="Logout()"
          >
            <p class="p-button-add">Logout</p>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      transactions: [],
    };
  },
  methods: {
    setTransaction(data) {
      this.transactions = data;
    },
    formNewProduk() {},
    Logout() {
      localStorage.removeItem("user-id");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("role_user");
      this.$router.replace({ name: "Login" });
    },
  },
  mounted() {
      console.log(localStorage.getItem('storeId'));
      var id = localStorage.getItem('user-id');
      var bodyFormData = new FormData();
      bodyFormData.append("id",id);
      axios({
        method: "post",
        url: `${this.$api}seller_transaksi`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.setTransaction(response.data.DATA);
         
        })
        .catch(function (response) {
          console.log(response);
        });
    },
};
</script>

<style scoped>
.fr-btn-add-product {
  width: 10rem;
  height: 75px;
  background: #28df99;
  border-radius: 8px;
}
.fr-btn-delete {
  margin-top: 10px;
  width: 10rem;
  height: 60px;
  border-radius: 8px;
}
.p-button-add {
  color: white;
  font-weight: bold;
  margin-top: 18px;
  text-align: center !important;
}
button:focus {
  outline: 0 !important;
}
</style>