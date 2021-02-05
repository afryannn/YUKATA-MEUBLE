<template>
  <div>
      <Main v-show="this.compMain"></Main>
      <NewProduk v-show="this.compNewProduk"></NewProduk>
  </div>
</template>
<script>
import Main from "./Main";
import NewProduk from "./NewProduk";

export default {
  components:{
     Main,
     NewProduk
  },
  data() {
    return{
        compMain:true,
        compNewProduk:false
    };
  },
};
</script>