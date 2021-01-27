<template>
  <div id="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicius Food Menu,</strong>
                <br />in your Gadget
              </h2>
              <p>ayo segera pilih dan pesan makanan favorit anda</p>
              <router-link to="/food" class="btn btn-lg btn-success">Pesan</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/ilustrasi.png" width="100%" />
        </div>
      </div>
    </div>

    <div class="d-sm-block d-md-none">
      <div class="col mt-4">
        <img src="../assets/images/ilustrasi.png" width="100%" />
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center mt-4 align-self-center">
              <h2>
                <strong>Delicius Food Menu,</strong>
                <br />in your Gadget
              </h2>
              <p>ayo segera pilih dan pesan makanan favorit anda</p>
              <button class="btn btn-lg btn-success">Pesan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>