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
          <h6 style="color: #28df99">Tips Dan Trik Upload Produk</h6>
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
                <h5 class="text-secondary">Petunjuk Penjual</h5>
                <div class="row mt-2 ml-1">
                  <table class="table table-borderless">
                    <tbody>
                      <tr style="background: none">
                        <td style="width: 1px !important; color: #28df99">
                          <span class="dot"></span>
                          <span class="dot"></span><br><br>
                          <span class="dot"></span>
                          <span class="dot"></span>
                          <span class="dot"></span>
                        </td>
                        <td>
                          <p style="margin:0 !important;">
                            Judul harus sesuai nama produk yang anda jual
                          </p>
                           <p style="margin:0 !important;">
                            Deskripsi Di peruntukan untuk memberi detail data produk<br>seperti (Warna,Ukuran dan Kategori).
                          </p>
                           <p style="margin:0 !important;">
                             Penjual Harus Memasukan Rekening yang valid ketika customer checkout.
                          </p>
                           <p style="margin:0 !important;">
                            Penjual Boleh memodifikasi File .xslx yang diunduh.
                          </p>
                           <p style="margin:0 !important;">
                            Penjual harus memberi Alamat Dan Nomor Telephone yang valid.
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
                          <span class="dot" style="margin-top:180px;"></span>
                        </td>
                        <td>
                          <p style="margin:0 !important;">
                            Ukuran Banner Toko Harus <b style="color: #28df99">1630px</B> <b>X</b> <b style="color: #28df99">458px</b><br><br>
                            <img class="shadow" width="40%" src="http://localhost:8000/api/v1/mediastore/templateBanner.png"><br><br>
                             Klik Untuk <a href="#"><b style="color: #28df99">Unduh</b></a>
                          </p>
                          <p style="margin:0 !important;">
                            Ukuran Profil Toko Harus <b style="color: #28df99">900px</B> <b>X</b> <b style="color: #28df99">900px</b><br><br>
                            <img class="shadow" width="10%" src="http://localhost:8000/api/v1/mediastore/templateProduk.png"><br><br>
                             Klik Untuk <a href="#"><b style="color: #28df99">Unduh</b></a>
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