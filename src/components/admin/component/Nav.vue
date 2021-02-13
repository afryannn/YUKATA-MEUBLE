<template>
  <div>
    <ul>
      <li>
        <button @click="toHome()">
          <span><i class="fa fa-home" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Home</span>
        </button>
      </li>
      <li>
        <a href="">
          <span class="fr-ti-face-smile"></span>
          <span>Produk</span>
        </a>
      </li>
      <li>
        <button @click="toDashboard()">
          <span style="color: white; margin-left: 8px">Dashboard</span>
        </button>
      </li>
      <li>
        <button @click="toEdit()">
          <span><i class="far fa-edit" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Edit Produk</span>
        </button>
      </li>
      <li>
        <button @click="toDelete()">
          <span><i class="far fa-trash-alt" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Hapus Produk</span>
        </button>
      </li>
      <li>
        <button @click="cek()">
          <span><i class="fa fa-money-bill" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Transaksi</span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    toEdit() {
      this.$router.replace({ name: "EditProduk" });
    },
    toDelete() {
      this.$router.replace({ name: "Remove" });
    },
    toDashboard() {
      this.$router.replace({ name: "Dashboard" });
    },
    toHome() {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>