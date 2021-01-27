<template>
  <v-container grid-list-xs>
    <div class="pd">
      <v-card class="mx-auto" max-width="600">
        <v-app-bar color="#4EB883"> </v-app-bar>
        <v-container>
          <v-row class="mb-3">
            <v-col md="8" offset-md="2">
              <v-row>
                <v-col md="8" offset-md="5">
                  <p
                    style="
                      color: #4eb883;
                      font-weight: bold;
                      font-size: 23px;
                      margin-top: 18px;
                    "
                  >
                    Login
                  </p>
                </v-col>
              </v-row>
              <form lazy-validation ref="form" v-on:submit.prevent>
                <v-text-field
                  class="text-green"
                  v-model="username"
                  label="Username"
                  :rules="[v => !!v || 'Mohon isi username']"
                  @keyup.enter.native="login"
                ></v-text-field>
                <v-text-field
                  class="text-green"
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>
                <v-btn class="mr-4 btn-green" @click="Masuk">Masuk</v-btn>
                <router-link
                  style="text-decoration: none; color: inherit; font-size: 13px"
                  class="text-green"
                  to="/Register"
                  >Belum Punya Akun?</router-link
                >
              </form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      result: [],
    };
  },
  methods: {
    async Masuk() {
      var bodyFormData = new FormData();
      bodyFormData.append("username", this.username);
      bodyFormData.append("password", this.password);
      await axios({
        method: "post",
        url:`${this.$api}login`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          var role = response.data.DATA.role_user;
          var message = response.data.MESSAGE;
          if(message == "username tidak ditemukan"){
            console.log("username tidak ditemukan");
          }else if(message == "PASSWORD SALAH")
          {
            console.log("pass username tidak ditemukan");
          }
          else{
               localStorage.setItem('user-id', response.data.DATA.id)
               localStorage.setItem('username', response.data.DATA.username)
               localStorage.setItem('email', response.data.DATA.email)
               localStorage.setItem('role_user', response.data.DATA.role_user)
               localStorage.setItem('isAuth',"true")
            if(role == "SELLER"){
              this.$router.replace({name:"Dashboard"});
            }else if(role == "VISITOR"){
              this.$store.commit("setAuthentication",true);
              this.$router.replace({name:"Home"});
            }
          }

        })
        .catch(function (response) {
          console.log(response);
        });
       }

  },
};
</script>

<style>
.pd {
  margin-top: 50px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.text-green {
  font-weight: normal !important;
  color: #4eb883 !important;
}
.btn-green {
  color: #ffff !important;
  background-color: #4eb883 !important;
}
</style>
