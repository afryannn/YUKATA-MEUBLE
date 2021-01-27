<template>
  <div>
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
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Nama Produk"
                    required
                  ></v-text-field>
                  <!-- <select v-model="blog.author">
                     <option v-for="author in authors" v-bind:key="author.id">{{author}}</option>
                  </select> -->
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    Validate
                  </v-btn>

                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </v-container>
    <h1>HI,admin</h1>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      id: "",
       authors:[
         {id:"1",
          name:"foo"
         }
       ],
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
  mounted() {
    // var id = localStorage.getItem("user-id");
    // var role_user = localStorage.getItem("role_user");
    // if (id == null) {
    //   window.location.href = `http://localhost:8080/Login`;
    // } else {
    //   if (role_user == "VISITOR" || role_user == null) {
    //     window.location.href = `http://localhost:8080/`;
    //   }
    //   this.id = id;
    // }
  },
};
</script>