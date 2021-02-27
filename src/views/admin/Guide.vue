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
        <div class="card">
          <div class="card-body">
            <h3 class="text-center" style="color: #28df99">Guide Seller</h3>
            <div class="container mt-4">
              <div class="class-guide">
                <h5 class="text-secondary">Petunjuk Data Produk</h5>
                <div class="row mt-2 ml-1">
                  <table class="table table-borderless">
                    <tbody>
                      <tr style="background: none">
                        <td style="width: 1px !important; color: #28df99">
                          <span class="dot"></span>
                        </td>
                        <td>
                          <p>
                            Judul harus sesuai nama produk yang anda punya di
                            gudang
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="class-guide mt-4">
                <h5 class="text-secondary">Petunjuk Pengaturan Media</h5>
                <div class="row mt-2 ml-1">
                  <table class="table table-borderless">
                    <tbody>
                      <tr style="background: none">
                        <td style="width: 1px !important; color: #28df99">
                          <span class="dot"></span>
                        </td>
                        <td>
                          <p>
                            Ukuran Gambar Produk Harus <b style="color: #28df99">54px</B> <b>X</b> <b style="color: #28df99">54px</b>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
export default {
  components: {
    Nav,
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