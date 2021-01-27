<template>
  <div class="card shadow card-product">
  <img  :src="require('../assets/images/'+product.gambar)"  width="100%" class="card-image-top"/>
    <div class="card-body">
     <h5 class="card-title">{{product.nama}}</h5>
     <p class="card-text">
        Harga : {{product.harga}}
     </p>
     <router-link :to="'/food/'+product.id" class="btn btn-success">Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],

  components:{},
};
</script>