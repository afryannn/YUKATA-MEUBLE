<template>
  <div>
    <div class="my-header">
      <div class="my-container">
        <div class="my-navbar">
          <div class="my-logo">
            <img src="../assets/b.png" width="180px" />
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/Produk">Produk</router-link>
              </li>
              <li>
                <router-link to="/Cari">Cari</router-link>
              </li>
              <li>
                <router-link to="/Tentang">Tentang</router-link>
              </li>
              <li v-if="this.id == null">
                <router-link to="/Login">Login</router-link>
              </li>
              <li v-else>
                <div v-if="this.role == 'SELLER'">
                  <router-link to="/Dashboard">Dashboard</router-link>
                </div>
                <div v-else>
                  <router-link to="/user" class="hover-c">cjfk</router-link>
                </div>
              </li>
            </ul>
          </nav>
          <img
            src="../assets/images/menu.png"
            class="menu-icon"
            @click="menutoggle()"
          />
        </div>
        <p class="text-center">Hallo {{ this.username }}</p>
        <div class="card shadow">
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Gambar</th>
                  <th scope="col">Produk</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Penjual</th>
                  <th scope="col">Pdf</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td class="text-center" style="padding: 0px !important">
                    <button
                      style="
                        margin-top: 8px;
                        border-radius: 5px;
                        background: red;
                        height: 35px;
                        width: 35px;
                      "
                    ></button>
                  </td>
                  <td class="text-center" style="padding: 0px !important">
                    <button
                      style="
                        margin-top: 8px;
                        border-radius: 5px;
                        background: red;
                        height: 35px;
                        width: 80px;
                      "
                    ></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: "",
      username: "",
      role: "",
      loading: false,
      // Nav:false
    };
  },
  mounted() {
    this.id = localStorage.getItem("user-id");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role_user");
    console.log(document.getElementById("MenuItems"));
  },
  methods: {
    menutoggle() {
      //   var MenuItems = document.getElementById("MenuItems");
      // // this.Nav = true
      // if(this.Nav == false){
      //   this.Nav = true
      // }else if(this.Nav == true){
      //   this.Nav = false
      // }
      //   var MenuItems = document.getElementById("MenuItems");
      //  // var click = false;
      //   if(MenuItems){
      //     MenuItems.style.maxHeight = "0px";
      //     console.log(MenuItems);
      //   }else{
      //     MenuItems.style.maxHeight = "200px";
      //   }
      //   if (click == true) {
      //     MenuItems.style.maxHeight = "200px";
      //     console.log("knjibn");
      //   }
      //    else {
      //     console.log("haha");
      //     MenuItems.style.maxHeight = "0px";
      //   }
    },
  },
};
</script>
<style>
.hover-c {
  font-weight: normal;
  background: #28df99;
  border-radius: 30px;
  padding: 8px 30px;
  color: white;
}
</style>
