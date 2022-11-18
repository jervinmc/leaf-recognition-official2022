<template>
  <div>
    <v-row class="px-10" >
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="6"
        align-self="center"
        class="px-10 bounce"
        transition="slide-x-transition"
      >
        <div class="text-h4 secondary--text">
          <b>LET'S ROOT FOR EACH OTHER AND WATCH EACH OTHER GROW.</b>
        </div>
        <div class="my-10 black--text">
          <!-- <v-btn depressed color="secondary" dark @click="scan">
            Upload
          </v-btn> -->
           <v-btn depressed color="secondary" dark @click="init">
            Scan
          </v-btn>
        </div>
      </v-col>
      <v-col align="center" cols="6" v-if="!$vuetify.breakpoint.xs">
        <v-img
          src="/images/vector.jpg"
          height="400"
          width="650"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <div class="pa-5" align="center">
       <div id="webcam-container" align="center" ></div>
    <div id="label-container"></div>
    <div>
      {{detected}}
    </div>
    </div>
    <div align="center" v-if="isView">
      <v-btn @click="recommendation" outlined>View Recommendation</v-btn>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { loadScript } from "vue-plugin-load-script";
loadScript(
  "https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"
);
loadScript(
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"
);

const URL = "https://teachablemachine.withgoogle.com/models/gEWbo6qt0/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
export default {
  data(){
    return{
      detected:'',
      isView:false,
    }
  },
  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute(
      "src",
      "//cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"
    );
    document.head.appendChild(ckeditor);
    ckeditor.setAttribute(
      "src",
      "//cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"
    );
    document.head.appendChild(ckeditor);
 
  },
  methods: {
    recommendation(){
      location=`/recommendation?disease=${this.detected}`
    },
    async init() {
      alert('Rendering the camera...')
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // load the model and metadata
      // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
      // or files from your local hard drive
      // Note: the pose library adds "tmImage" object to your window (window.tmImage)
      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true; // whether to flip the webcam
      webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      window.requestAnimationFrame(this.loop);
         this.isView = true;

      // append elements to the DOM
      document.getElementById("webcam-container").appendChild(webcam.canvas);
      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement("div"));
      }

    },

    async loop() {
      webcam.update(); // update the webcam frame
      await this.predict();
      window.requestAnimationFrame(this.loop);
    },

    async predict() {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        if((prediction[i].probability.toFixed(2)*100)>80){
           const classPrediction =
          prediction[i].className;
          // + ": " + (prediction[i].probability.toFixed(2)*100
        // labelContainer.childNodes[i].innerHTML = classPrediction;
        
        this.detected = classPrediction;
        }
      }
    },
  },
};
</script>
  
  <style lang="scss">
// .button {
//   background-color: #4caf50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// }
// .button5 {
//   background-color: #555555;
// } /* Black */
// .home-footer {
//   flex-wrap: wrap;
//   color: white;
//   font-size: 16px;
//   padding: 50px;
//   height: 200px;
//   flex-flow: wrap;
//   justify-content: center;
//   align-items: center;
//   display: flex;
// }
// .hero {
//   padding: 50px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//     url("https://t4.ftcdn.net/jpg/04/31/97/65/360_F_431976514_P4b7umRdTxJeewAyzD5ItVc8LTTurva7.jpg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   justify-content: center;
//   display: flex;
//   color: white;
//   align-items: center;
//   height: 350px;
//   font-size: 40px;
// }
// ul {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background-color: #426e6c;
// }

// li {
//   float: left;
// }

// li a {
//   display: block;
//   color: white;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
// }

// li a:hover:not(.active) {
//   background-color: #426e6c;
// }
// div {
//   font-family: Verdana, sans-serif;
// }
// .active {
//   background-color: #426e6c;
// }
</style>