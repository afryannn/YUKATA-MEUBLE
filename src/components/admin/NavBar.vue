<template>
  <div>
    <input type="checkbox" id="sidebar-toggle" />
    <div class="fr-sidebar">
      <div class="fr-sidebar-header">
        <h3 class="fr-brand">
          <span class="ti-unlink"></span>
          <span class="t-spn">YUKATA SELLER</span>
        </h3>
        <label for="sidebar-toggle" class="ti-menu-alt"></label>
      </div>
      <div class="fr-sidebar-menu">
        <ul>
          <li>
           <button @click="toHome()">
              <span class="fr-ti-clipboard"></span>
              <span>Home</span>
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
              <span class="fr-ti-clipboard"></span>
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button @click="toEdit()">
              <span class="fr-ti-clipboard"></span>
              <span>Edit Produk</span>
            </button>
          </li>
          <li>
             <button @click="toDelete()">
              <span class="fr-ti-folder"></span>
              <span>Hapus Produk</span>
            </button>
          </li>
          <li>
            <button @click="cek()">
              <span class="fr-ti-time"></span>
              <span>Transaksi</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toEdit() {
      this.$router.replace({ name: "EditProduk" });
    },
    toDelete(){
      this.$router.replace({ name: "Remove" });
    },
    toDashboard(){
      this.$router.replace({ name: "Dashboard" });
    },
    toHome(){
      this.$router.replace({ name: "Home" });
    }
  },
};
</script>