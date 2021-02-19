<template>
  <div>
    <v-overlay :value="loading" :opacity="0.9">
      <v-progress-circular
        indeterminate
        style="color: #28df99"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>