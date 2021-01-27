<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <b><a class="navbar-brand bold">Food App</a></b>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/food">Food</router-link>
          </li>
        </div>

        <div class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/Keranjang"
              >Keranjang
              <span class="badge badge-success">{{
                setkrj ? setkrj.length : jumlah_pesanans.length
              }}</span>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: ["setkrj"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
