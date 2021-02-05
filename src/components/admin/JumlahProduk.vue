<template>
  <div>
    <div class="fr-card-single">
      <div class="fr-card-body">
        <span class="ti-briefcase"></span>
        <div>
          <h5>Jumlah Produk</h5>
          <h4>{{this.items}}</h4>
        </div>
      </div>
      <div class="fr-card-footer">
      
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
      return{
        items:"",
      }
    },
    methods:{
    
    },
    mounted() {
      var bodyFormData = new FormData();
      bodyFormData.append("user_id", localStorage.getItem("user-id"));
      axios({
        method: "post",
        url:`${this.$api}count-product`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.items = response.data.DATA.item
        })
        .catch(function (response) {
          console.log(response);
        });
    },
}
</script>