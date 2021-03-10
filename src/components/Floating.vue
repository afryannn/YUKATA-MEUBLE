<template>
     <v-app id="inspire">
    <div class="text-xs-center">
      <v-menu
        min-width = 300
        top
        v-model="menu"
        :close-on-click="false"
        :close-on-content-click="false"
        :nudge-top="60"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn
              v-model="fab"
              v-on="on"
              color='green darken-1'
              @click="fab = !fab; menu = false"
              dark
              fixed
              bottom
              right
              fab
            >
              <v-icon>comment</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-card>
          <v-list dark class="chat-header">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Contact me</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  icon
                  @click="fab = !fab; menu = false"
                >
                  <v-icon>cancel</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-container class="chat-background">
            <v-layout row wrap >
              <v-flex class="text-xs-right" xs12 mb-4>
                <v-chip class="chip-chat ">
                  Hello, how can we help you? <v-icon right>done_all</v-icon>
                </v-chip>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  single-line
                  color="teal"
                  class="my-input"
                  v-model="text"
                  outline
                ></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn
                  large
                  class="teal--text"
                  icon
                  @click="fab = !fab; menu = false"
                  :href="apilink"
                  target="_blank"
                >
                  <v-icon large>send</v-icon>
                </v-btn>
               </v-flex>
             </v-layout>  
          </v-container>
        </v-card>  
      </v-menu>   
    </div>
  </v-app>
</template>
<script>
export default {
 data: () => ({
    fab: false,
    fav: true,
    menu: false,
    message: false,
    hints: true,
    phone: '5521997642382',
    text: "",
    apilink: ""
  }),
    
}
</script>
<style scoped>
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
.chat-background {
  background-color: #ECE5DD !important
}
.chat-header {
  background-color: #075E54 !important
}
.chip-chat {
  background-color: #DCF8C6 !important
}
</style>