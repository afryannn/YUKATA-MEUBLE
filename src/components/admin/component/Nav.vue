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
        <button @click="toStore()">
          <span><i class="fas fa-store" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Toko</span>
        </button>
      </li>
      <li>
        <button @click="toProduk()">
          <span><i class="fas fa-table" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Produk</span>
        </button>
      </li>
      <li>
        <button @click="toGuide()">
          <span><i class="fas fa-tasks" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Guide</span>
        </button>
      </li>
      <li>
        <button @click="toDashboard()">
          <span><i class="fas fa-chart-line" style="color: white"></i></span>
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

      <li v-show="lgt">
        <button @click="toLogout()">
          <span><i class="fas fa-sign-out-alt" style="color: white"></i></span>
          <span style="color: white; margin-left: 8px">Logout</span>
        </button>
      </li>

      <li>
        <button>
          <span v-show="strns"
            ><i class="fas fa-file-excel" style="color: white"></i
          ></span>
          <span
            ><a
              v-bind:href="this.url"
              style="margin-left: 8px !important; font-size: 16px"
              v-show="strns"
              >Unduh Transaksi</a
            ></span
          >
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      strns: true,
      lgt: false,
    };
  },
  mounted() {
    if (localStorage.getItem("store-status") == "FALSE") {
      this.strns = false;
      this.lgt = true;
    } else {
      this.strns = true;
      this.lgt = false;
      var stringurl = `${this.$api}getExcel/` + localStorage.getItem("user-id");
      this.url = stringurl;
    }
  },
  methods: {
    toLogout() {
      localStorage.removeItem("user-id");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("user-id");
      localStorage.removeItem("store-status");
      localStorage.removeItem("telephone");
      localStorage.removeItem("role_user");
      window.location.href = `${this.$app}`;
    },
    toEdit() {
      if (localStorage.getItem("store-status") == "FALSE") {
        this.$router.replace({ name: "NewStore" });
      } else {
        this.$router.replace({ name: "EditProduk" });
      }
    },
    toStore() {
      if (localStorage.getItem("store-status") == "FALSE") {
        this.$router.replace({ name: "NewStore" });
      } else {
        var name = localStorage.getItem("store");
        if (name == "") {
          console.log("err");
        }
        location.href = `${this.$app}s/` + name;
      }
    },
    toProduk() {
      if (localStorage.getItem("store-status") == "FALSE") {
        this.$router.replace({ name: "NewStore" });
      } else {
        this.$router.replace({ name: "MyProduk" });
      }
    },
    toGuide() {
      this.$router.replace({ name: "Guide" });
    },
    toDelete() {
      if (localStorage.getItem("store-status") == "FALSE") {
        this.$router.replace({ name: "NewStore" });
      } else {
        this.$router.replace({ name: "Remove" });
      }
    },
    toDashboard() {
      location.href = `${this.$app}Dashboard`;
    },
    toHome() {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>