<template>
  <div class="pa-16">
    <div align="center" class="text-h4 pb-5">
      <b>Growing Tips</b>
    </div>
    <v-sheet class="mx-auto" elevation="8">
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="n in entry" :key="n" class="pa-5">
          <v-card class="mx-5" max-width="344">
            <v-img :src="n.image" height="200px"></v-img>

            <v-card-title> {{ n.title }} </v-card-title>

            <v-card-subtitle> {{ n.description }} </v-card-subtitle>


            <!-- <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition> -->
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- <v-row>
      <v-col align="center">
        <div class="text-h6 pb-5">
          <b>Strawberry Leaf scorch</b>
        </div>
        <div>
          Reference: 
          <div @click="locate('https://www.gardeningknowhow.com/edible/fruits/strawberry/strawberries-with-leafscorch.htm#:~:text=Scorched%20strawberry%20leaves%20are%20caused,on%20the%20topside%20of%20leaves.')">
            More details
          </div>
        </div>
        <v-row>
          <v-col>
            <v-card height="200" width="200"> </v-card>
          </v-col>
          <v-col>
            <v-card height="200" width="200"> </v-card>
          </v-col>
          <v-col>
            <v-card height="200" width="200"> </v-card>
          </v-col>
          <v-col>
            <v-card height="200" width="200"> </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  created(){
    if(this.$route.query.disease!=undefined){
     this.$vuetify.goTo('#recommendation')
    }
  },
  data() {
    return {
      entry: [
        {
          title: "Plant according to season",
          description:
            "Saving water is one of the most important facets of sustainable gardening. The best way to do that is to plant the most water-intensive crops during the rainy season. This could include sweet potatoes,eggplants,cucumbers, bamboo shoots or pumpkins. By planting these at the right time, you'll be able to make use of the rainfall at the right time.",
          image: "/images/tip1.jpeg",
        },
        {
          title: "Collect rainwater",
          description:
            "To ensure your plants get enough water when it's not raining, collect rainwater with water butts rather than wasting clean water from the grid. You can save some of this water for the vegetables you'll be planting in the dryer season, such as tomatoes (pick the most heat-tolerant varieties).",
          image: "/images/tip2.jpeg",
        },
        {
          title: "Use mulch to help water retention during the dry season",
          description:
            "Cover the ground around your plants with mulch it will help retain water in the soil for longer, which is one of the key steps youll want to achieve with sustainable urban gardening. It will also prevent the roots from overheating on hot days and keep your plants healthy. It's important to ensure that the mulch you're using for your sustainable gardening is coming from a sustainable source. Try shredded bark, sand or cocoa bean hulls.",
          image: "/images/tip3.jpeg",
        },
        {
          title:
            "Raise garden beds for better drainage during the rainy season",
          description:
            "In the tropics, you don't just have to deal with not getting enough water  but also with too much of it. One of the simplest ways to prevent your plants from rotting while staying true to the principles of sustainable gardening is to raise the garden beds using rocks, old construction materials or reclaimed wood.",
          image: "/images/tip5.jpeg",
        },
        {
          title: "Use a compost",
          description:
            "This is a tip everyone who's getting into urban gardening should use  composting. You can turn food scraps or plant trimmings into rich, sustainable fertilizer!",
          image: "/images/tip4.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
</style>