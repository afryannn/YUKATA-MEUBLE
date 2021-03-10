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
          <h6 style="color: #28df99">Update Produk</h6>
        </div>
        <div class="fr-social-icons">
          <span class="ti-bell"></span>
          <span class="ti-comment"></span>
          <div></div>
        </div>
      </header>

      <!--------------------START CONTENT---------------------->
      <main>
        <App />
      </main>

      <!--------------------END CONTENT---------------------->
    </div>
  </div>
</template>
<script>
import Nav from "../../components/admin/component/Nav";
import App from "../../components/admin/EditProduk";
export default {
  components: {
    Nav,
    App,
  },
};
</script>
<style scoped>
</style>