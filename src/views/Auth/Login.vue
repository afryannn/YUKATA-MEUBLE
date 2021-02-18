<template>
  <v-container grid-list-xs>
    <v-overlay :value="loading" :opacity="0.95">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
    <a href="http://localhost:8000/api/v1/getPdf">Pdf</a>
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
                ></v-text-field>
                <p v-show="alertUsername" style="color: red; font-size: 13px">
                  * Mohon Isi username!
                </p>
                <p v-show="this.eUsername" style="color: red; font-size: 13px">
                  * Username Tidak Ditemukan!
                </p>
                <p v-show="this.ePassword" style="color: red; font-size: 13px">
                  * Password Salah!
                </p>
                <v-text-field
                  class="text-green"
                  v-model="password"
                  label="Password"
                ></v-text-field>
                <p v-show="alertPassword" style="color: red; font-size: 13px">
                  * Password Kosong!
                </p>
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
      alertUsername: false,
      alertPassword: false,
      eUsername: false,
      ePassword: false,
      result: [],
      loading: false,
    };
  },
  methods: {
    async Masuk() {
      this.loading = true;
      if (!this.username) {
        this.alertUsername = true;
        this.eUsername = false;
        this.ePassword = false;
      } else {
        this.alertUsername = false;
        if (!this.password) {
          this.alertPassword = true;
          this.eUsername = false;
          this.ePassword = false;
        } else {
          this.alertPassword = false;
          var bodyFormData = new FormData();
          bodyFormData.append("username", this.username);
          bodyFormData.append("password", this.password);
          await axios({
            method: "post",
            url: `${this.$api}login`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((response) => {
              this.loading = false;
              var message = response.data.MESSAGE;
              if (message == "ERR-USERNOTFOUND") {
                this.eUsername = true;
                this.alertUsername = false;
                this.alertPassword = false;
              } else if (message == "ERR-PASSWRONG") {
                this.eUsername = false;
                this.ePassword = true;
                this.alertUsername = false;
                this.alertPassword = false;
              } else {
                var role = response.data.DATA.role_user;
                localStorage.setItem("user-id", response.data.DATA.id);
                localStorage.setItem("username", response.data.DATA.username);
                localStorage.setItem("email", response.data.DATA.email);
                localStorage.setItem("telephone", response.data.DATA.telephone);
                localStorage.setItem("role_user", role);
                if (role == "SELLER") {
                  console.log(localStorage.getItem("user-id"));
                  this.$router.replace({ name: "Dashboard" });
                } else if (role == "VISITOR") {
                  this.$store.commit("setAuthentication", true);
                  this.$router.replace({ name: "Home" });
                }
              }
            })
            .catch(function (response) {
              console.log(response);
            });
        }
      }
    },
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
