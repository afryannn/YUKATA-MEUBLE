<template>
  <div>
    <div class="my-header">
      <div class="my-container">
        <div class="my-navbar">
          <div class="my-logo">
            <img src="../assets/images/logo.png" width="125px" />
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <router-link to="/" class="hover-c">Home</router-link>
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
              <li v-if="(this.id == null)">
                <router-link to="/Login">Login</router-link>
              </li>
              <li v-else>
                <router-link to="/About">{{this.username}}</router-link>
              </li>
            </ul>
          </nav>
          <!-- <img src="../assets/images/cart.png" width="30px" height="30px"/> -->
          <img
            src="../assets/images/menu.png"
            class="menu-icon"
            @click="menutoggle"
          />
        </div>
      </div>
    </div>
  </div>
</template>
