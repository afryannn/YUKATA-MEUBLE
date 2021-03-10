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
          <span><i class="fas fa-table" style="color:white"></i></span>
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
          <span><i class="fas fa-chart-line" style="color:white"></i></span>
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
        <button>
          <span><i class="fas fa-file-excel" style="color:white"></i></span>
         <span><a v-bind:href='this.url' style="margin-left: 8px !important; font-size:16px;">Unduh Transaksi</a></span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
   return{
     url:''
   }
  },
  mounted(){
    var stringurl = `${this.$api}getExcel/`+localStorage.getItem('user-id')
    this.url = stringurl
  },
  methods: {
    toEdit() {
      this.$router.replace({ name: "EditProduk" });
    },
    toStore(){
         var name = localStorage.getItem('store');
        if(name == '')
           {
               console.log('err');
           }
              location.href = "http://localhost:8080/s/"+name;

    },
    toProduk(){
      this.$router.replace({ name: "MyProduk" });
    },
    toGuide() {
      this.$router.replace({ name: "Guide" });
    },
    toDelete() {
      this.$router.replace({ name: "Remove" });
    },
    toDashboard() {
     location.href = "http://localhost:8080/Dashboard";
    },
    toHome() {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>