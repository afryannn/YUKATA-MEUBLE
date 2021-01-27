<template>
     <v-btn class="mr-4 btn-green" @click="logout">Metu</v-btn>
</template>
<script>
export default {
methods:{
    logout(){
       localStorage.removeItem('user-id')
               localStorage.removeItem('username')
               localStorage.removeItem('email')
               localStorage.removeItem('role_user')
                window.location.href = `http://localhost:8080/`;
    }
}
}
</script>