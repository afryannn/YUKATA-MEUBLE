<template>
<div>
<h2 class="title">Daftar Produk</h2>
    <div class="my-small-container">
        <div class="my-row">
            <div class="my-col-4" v-for="data in datas" :key="data.id">
                <img src="../../assets/images/product-11.jpg">
                 <h6 style="color:#222831 !important; font-weight:bold !important;">{{data.product_name}}</h6>
                 <p>{{data.name}}<br>Rp.{{data.product_price}}</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data(){
       return{
           datas :[]
       }
    },
    methods:{
      setProduct(data){
        this.datas = data
      },
    },
    mounted(){
      axios
      .get("http://localhost:8000/api/v1/list-produk")
      .then((response) => this.setProduct(response.data.DATA))
      .catch((error) => console.log("Fail : ", error));
    }
};
</script>
