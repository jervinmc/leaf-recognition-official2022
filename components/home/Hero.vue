<template>
  <div class="pa-5">
      <v-row  :class="!$vuetify.breakpoint.xs ? 'px-10' : ''">
        <v-col  cols="12" md="6" xl="6" lg="6" align-self="center" class="px-10 bounce" transition="slide-x-transition">
          <div :class="!$vuetify.breakpoint.xs ? 'text-h4 secondary--text' : 'text-h6 secondary--text'">
            <b>LET'S ROOT FOR EACH OTHER AND WATCH EACH OTHER GROW.</b>
          </div>
          <div class="my-10 black--text">
            <v-btn depressed color="secondary" dark @click="scan"> SCAN NOW </v-btn>
          </div>
        </v-col>
        <v-col align="center" cols="6" v-if="!$vuetify.breakpoint.xs">
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