<template>
  <div :class="$vuetify.breakpoint.xs ? 'pa-5' : 'pa-16'">
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
          <v-card max-width="344">
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
    <div class="py-5">
      <div>
        Source Link : <a href="https://www.seedgrocer.com/blogs/gardening-tips/blog3">https://www.seedgrocer.com/blogs/gardening-tips/blog3</a>
      </div>
      <div>
        Beneficiary's additional advice
      </div>
    </div>
    <div class="pt-10 pa-5" >
     <div align="center" class="text-h5 pb-5">
      <b> Disease List </b>
     </div>
     <v-card class="pa-5" align="center">
        <div>
      <ul >
          <div @click="locate('Corn Common Rust')"  class="pointer" >
            Corn Common Rust
          </div>

          <div class="pointer" @click="locate('Corn Northern Leaf Blight')">
            Corn Northern Leaf Blight
          </div>
        
          <div class="pointer" @click="locate('Grape Black Rot')">
            Grape Black Rot
          </div>
        
        
          <div class="pointer" @click="locate('Grape Esca')">
            Grape Esca
          </div>
        
        
          <div class="pointer" @click="locate('Grape Leaf Blight')">
            Grape Leaf Blight
          </div>
        
        
          <div class="pointer" @click="locate('Peach Bacterial Spot')">
            Peach Bacterial Spot
          </div>
        
        
          <div class="pointer" @click="locate('Potato Early Blight')">
            Potato Early Blight
          </div>
        
        
          <div class="pointer" @click="locate('Potato Late Blight')">
            Potato Late Blight
          </div>
        
        
          <div class="pointer" @click="locate('Strawberry Leaf Scorch')">
            Strawberry Leaf Scorch
          </div>
        
        
          <div class="pointer" @click="locate('Squash Powdery Mildrew')">
            Squash Powdery Mildrew
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Bacterial Spot')">
            Tomato Bacterial Spot
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Early Blight ')">
           Tomato Early Blight 
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Late Blight')">
            Tomato Late Blight
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Leaf Mold')">
            Tomato Leaf Mold
          </div>
        
        
          <div @click="locate('Tomato Mosaic Virus')">
            Tomato Mosaic Virus
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Septoria Leaf Spot')">
           Tomato Septoria Leaf Spot
          </div>
        
        
          <div class="pointer" @click="locate('Tomato Spider Mites')">
            Tomato Spider Mites
          </div>

        
          <div class="pointer" @click="locate('Tomato Target Spot')">
            Tomato Target Spot
          </div>
          <div @click="locate('Tomato Yellow Leaf Curl virus')">
            Tomato Yellow Leaf Curl virus
          </div>
      </ul>
     </div>
     </v-card>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    if(this.$route.query.disease!=undefined){
     this.$vuetify.goTo('#recommendation')
    }
  },
  methods:{
    locate(url){
      window.open(`https://i-plant-app.netlify.app/recommendation?disease=${url}`,'_blank')
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
        {
          title: "Use high-quality soil",
          description:
            "Always make sure to plant on a healthy soil. This will be greatly beneficial to the plant as it will acquire the finest nutrients which will definitely boost its health and ability to produce food. Using low-quality soil will have the opposite effect. It will make plants more vulnerable to diseases and hinder their ability to grow, and also shortens their lifespan.",
          image: "/images/tips5.jpeg",
        },
        {
          title: "Use pesticides if you see pests infesting your plant leaves",
          description:
            "Insects and other form of pests can and will destroy your plants, if not, greatly reduce their ability to produce fruits or vegetables. Use pesticides to deal with pests, as pesticides can be very effective and is harmless to plants.",
          image: "/images/tips6.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
</style>