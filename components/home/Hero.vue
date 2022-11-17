<template>
  <div>
      <v-row class="px-10">
        <v-col  cols="6" align-self="center" class="px-10 bounce" transition="slide-x-transition">
          <div class="text-h4 secondary--text">
            <b>LET'S ROOT FOR EACH OTHER AND WATCH EACH OTHER GROW.</b>
          </div>
          <div class="my-10 black--text">
            <v-btn depressed color="secondary" dark @click="scan"> SCAN NOW </v-btn>
          </div>
        </v-col>
        <v-col align="center" cols="6">
          <v-img src="/images/vector.jpg" height="400" width="650" contain></v-img>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  methods:{
    scan(){
      location="/scanner"
    }
  }
};
</script>

<style>

</style>