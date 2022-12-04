<template>
  <div class="pa-16">
    <v-dialog v-model="isSelectedImage">
      <v-img :src="selectedImage" height="600"></v-img>
    </v-dialog>
    <div class="text-h4 pa-5" align="center">
      <b>Recommendation</b>
    </div>
    <div align="center">
      <v-card class="pa-5">
        <div class="text-h4">
          {{ $route.query.disease }}
        </div>
        <div>
          {{description}}
        </div>
        <div class="pt-5" align="start">How to manage diseases:</div>
        <div align="start">
          <ul>
            <li>
              {{ guides[0] }}
            </li>
            <li>
              {{ guides[1] }}
            </li>
            <li>
              {{ guides[2] }}
            </li>
            <li>
              {{ guides[3] }}
            </li>
            <li>
              {{ guides[4] }}
            </li>
          </ul>
        </div>

        <div class="py-10">
          <div class="text-h5" align="center">Sample Disease Images</div>
          <v-row>
            <v-col v-for="x in images" :key="x">
              <v-card @click="selectImage(x)">
                <v-img :src="x" height="200"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div>
          <a :href="link">  Know more about the disease</a>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    link:'',
      selectedImage: "",
      isSelectedImage: false,
      title: "",
      description:
        "Scorched strawberry leaves are caused by a fungal infection which affects the foliage of strawberry plantings. The fungus responsible is called Diplocarpon earliana.",
      images: [],
      guides: [
        "removal of infected garden debris from the strawberry patch",
        "creation of new plantings and strawberry patches is key to maintaining a consistent strawberry harvest",
        "avoidance of waterlogged soil and frequent garden cleanup will help to reduce the likelihood of spread of this fungus.",
        "Use drip irrigation if possible. When using overhead irrigation, shorten sets and water at times that promote rapid drying of the foliage.",
        "Space plants so foliage dries rapidly after rain and irrigation.",
      ],
      source: "",
    };
  },
  methods: {
    selectImage(x) {
      this.isSelectedImage = true;
      this.selectedImage = x;
    },
  },
  created() {
    // if(this.$route.query.disease=='Strawberry Leaf Scorch'){
    //     this.title = ''
    //     this.description = ''
    //     this.images = []
    //     this.guides[0]=''
    //     this.guides[1]=''
    //     this.guides[2]=''
    //     this.guides[3]=''
    //     this.guides[4]=''
    // }
    if (this.$route.query.disease == "Tomato Bacterial Spot") {
        this.link='https://hort.extension.wisc.edu/articles/bacterial-spot-of-tomato/#:~:text=Bacterial%20spot%20of%20tomato%20is%20caused%20by%20Xanthomonas%20vesicatoria%2C%20Xanthomonas,or%20may%20not%20show%20symptoms.'
      this.description =
        "Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans. These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.";
       this.images = ['/images/totamato/1.jpeg','/images/tomato/2.jpeg','/images/tomato/3.jpeg','/images/tomato/4.jpeg'];
      this.guides[0] =
        "remove the affected leaves at the first sign to prevent the bacteria from jumping onto adjacent leaves.";
      this.guides[1] =
        "Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing.";
      this.guides[2] =
        "Measures for controlling and preventing blights typically involve the destruction of the infected plant parts";
      this.guides[3] =
        "Bravo (chlorothalonil) and Dithane (mancozeb) are contact fungicides and you must start applying them early. Contact fungicides will be the backbone of any late blight spray program because they are cost effective.";
      this.guides[4] = "";
    }
    if (this.$route.query.disease == "Tomato Bacterial Spot") {
        this.link='https://hort.extension.wisc.edu/articles/bacterial-spot-of-tomato/#:~:text=Bacterial%20spot%20of%20tomato%20is%20caused%20by%20Xanthomonas%20vesicatoria%2C%20Xanthomonas,or%20may%20not%20show%20symptoms.'
      this.title = "";
      this.description =
        "Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans. These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.";
       this.images = ['/images/totamato/1.jpeg','/images/tomato/2.jpeg','/images/tomato/3.jpeg','/images/tomato/4.jpeg'];
      this.guides[0] =
        "remove the affected leaves at the first sign to prevent the bacteria from jumping onto adjacent leaves.";
      this.guides[1] =
        "Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing.";
      this.guides[2] =
        "Your best bet is prevention and mechanical control at the first sign of symptoms of bacterial leaf spot.";
      this.guides[3] =
        "Measures for controlling and preventing blights typically involve the destruction of the infected plant parts";
      this.guides[4] =
        "The same sprays can be used to treat any blight infected plants.";
    }
    if (this.$route.query.disease == "Tomato Early Blight") {
        this.link='https://content.ces.ncsu.edu/early-blight-of-tomato'
      this.title = "";
      this.description =
        "Blight on tomatoes is caused by a fungal infection and like all fungi, they are spread by spores and require damp, warm weather conditions to flourish which affects leaves, fruits and stems and can be severely yield-limiting when susceptible tomato cultivars are used and weather is favorable. Severe defoliation can occur. In tomatoes, fruit can be damaged by sun.";
      this.images = ['/images/tomato_early/1.jpeg','/images/tomato_early/2.jpeg','/images/tomato_early/3.jpeg','/images/tomato_early/4.jpeg'];
      this.guides[0] =
        "Cover the soil under the plants with mulch, such as fabric, straw, plastic mulch, or dried leaves.";
      this.guides[1] =
        "Water at the base of each plant, using drip irrigation, a soaker hose, or careful hand watering.";
      this.guides[2] =
        "Most home gardeners dont need to treat tomatoes with a fungicide. Tomato plants can tolerate a lot of early blight without reducing the number of tomatoes they produce.";
      this.guides[3] = "Keep leaves dry to reduce spreading the disease.";
      this.guides[4] =
        "Increase airflow by staking or trellising, removing weeds, and spacing plants adequately apart";
    }
    if (this.$route.query.disease == "Tomato Late Blight") {
        this.link='https://vegpath.plantpath.wisc.edu/diseases/tomato-late-blight/#:~:text=Tomato%20leaf%20late%20blight%20lesions,show%20rings%20of%20pathogen%20growth.'
      this.title = "";
      this.description =
        "Late blight tomato disease is the rarest of the blights that affect both tomatoes and potatoes, but it is also the most destructive. Tomato Late Blight is a fungus-like organism that can destroy a crop within days if conditions are right. Vigilant observation";
       this.images = ['/images/tomato_late/1.jpeg','/images/tomato_late/2.jpeg','/images/tomato_late/3.jpeg','/images/tomato_late/4.jpeg'];
      this.guides[0] =
        "Sanitation is the first step in controlling tomato late blight. Clean up all debris and fallen fruit from the garden area.";
      this.guides[1] =
        "There are no strains of tomato available that are resistant to late tomato blight, so plants should be inspected at least twice a week.";
      this.guides[2] =
        "Since late blight symptoms are more likely to occur during wet conditions, more care should be taken during those times.";
      this.guides[3] =
        "All infected plants must be immediately removed and destroyed.";
      this.guides[4] =
        "The same sprays can be used to treat any blight infected plants.";
      this.source = "https://extension.umn.edu/disease-management/late-blight";
    }
    if (this.$route.query.disease == "Tomato Leaf Mold") {
        this.link='https://www.vegetables.cornell.edu/crops/tomatoes/tomato-leaf-mold/'
      this.title = "";
      this.description =
        "Tomato leaf mold is a fungal disease that can develop when there are extended periods of leaf wetness and the relative humidity is high (greater than 85 percent). Due to this moisture requirement, the disease is seen primarily in hoophouses and greenhouses.";
       this.images = ['/images/tomato_mold/1.jpeg','/images/tomato_mold/2.jpeg','/images/tomato_mold/3.jpeg','/images/tomato_mold/4.jpeg'];
      this.guides[0] = "Sanitize the greenhouse between crop seasons.";
      this.guides[1] =
        "If growing tomatoes in a greenhouse, maintain night temps higher than outside temperatures.";
      this.guides[2] =
        "When planting, use only certified disease-free seed or treated seed.";
      this.guides[3] = "Remove and destroy all crop debris post-harvest.";
      this.guides[4] =
        "The same sprays can be used to treat any blight infected plants.";
    }
    if (this.$route.query.disease == "Corn Common Rust") {
        this.link='https://extension.umn.edu/corn-pest-management/common-rust-corn#:~:text=Common%20rust%20produces%20rust%2Dcolored,as%20sheaths%2C%20can%20be%20infected.'
      this.title = "";
      this.description =
        "Common rust of sweet corn is caused by the fungus Puccinia sorghi and can result in serious losses in yield or quality of sweet corn.  Early symptoms of common rust are chlorotic flecks on the leaf surface.";
      this.images = [
        "/images/corn/1.jpeg",
        "/images/corn/2.jpeg",
        "/images/corn/3.jpeg",
        "/images/corn/4.jpeg",
      ];
      this.guides[0] =
        "The best management practice is to use resistant corn hybrids.";
      this.guides[1] =
        "To reduce the incidence of corn rust, plant only corn that has resistance to the fungus.";
      this.guides[2] =
        "Resistance is either in the form of race-specific resistance or partial rust resistance.";
      this.guides[3] =
        "If the corn begins to show symptoms of infection, immediately spray with a fungicide.";
      this.guides[4] =
        "The fungicide is most effective when started at the first sign of infection.";
      this.source =
        "https://www.gardeningknowhow.com/edible/vegetables/corn/corn-rust-fungus-control.htm";
    }
    if (this.$route.query.disease == "Corn Northern Leaf Blight") {
        this.link='https://extension.umn.edu/corn-pest-management/northern-corn-leaf-blight'
      this.title = "";
      this.description =
        "Northern corn leaf blight (NCLB), caused by the fungus Exserohilum turcicum. During wet weather yield losses may be as high as 30-50% if the disease becomes establishes before tasseling. However, if leaf damage is only moderate or is delayed until 6 weeks";
      this.images = ['/images/corn_blight/1.jpeg','/images/corn_blight/2.jpeg','/images/corn_blight/3.jpeg','/images/corn_blight/4.jpeg'];
      this.guides[0] =
        "Planting resistant hybrids is the most effective method for controlling NCLB.";
      this.guides[1] =
        "A one- to two-year rotation away from corn and destruction of old corn residues by tillage will be helpful for controlling NCLB.";
      this.guides[2] =
        "Fungicide sprays are recommended for fresh market sweet corn, hybrid seed production, and dent corn fields planted with susceptible hybrids.";
      this.guides[3] =
        "Use resistant hybrids. Fungicides may be warranted on inbreds for seed production during the early stages of this disease. Crop rotation and tillage practices may be helpful in some cases.";
      this.guides[4] =
        "Apply a fungicide during the period from bloom through early spring. Make the first application during early leafing, which usually occurs at full bloom to petal fall. Pink bud is too early for control.";
      this.source = "https://ohioline.osu.edu/factsheet/plpath-cer-10";
    }
    if (this.$route.query.disease == "Grape Black Rot") {
        this.link='https://grapesandwine.cals.cornell.edu/newsletters/appellation-cornell/2014-newsletters/issue-17/managing-black-rot/'
      this.title = "";
      this.description =
        "Black rot of grapes is a fungal disease that persists in grapevines for many years without treatment. The earliest signs of disease appear as yellow circular lesions on young leaves. As these lesions spread, they brown and sprout black fungal fruiting bodies that look similar to grains of pepper.";
      this.images = ['/images/grape_rot/1.jpeg','/images/grape_rot/2.jpeg','/images/grape_rot/3.jpeg','/images/grape_rot/4.jpeg'];;
      this.guides[0] =
        "The best time to treat black rot of grapes is between bud break until about four weeks after bloom; treating outside of this window is likely to end in frustration.";
      this.guides[1] =
        "Prevention is key when dealing with grape black rot. During your fall clean-up, make sure that all mummies have been removed from the vine and all plant material on the ground below is destroyed.";
      this.guides[2] = "Captan and myclobutanil are the fungicides of choice.";
      this.guides[3] =
        "During your fall clean-up, make sure that all mummies have been removed from the vine and all plant material on the ground below is destroyed.";
      this.guides[4] = "just use watering tools to make it improve.";
    }
    if (this.$route.query.disease == "Grape Esca") {
        this.link='https://www2.ipm.ucanr.edu/agriculture/grape/Esca-Black-Measles/'
      this.title = "";
      this.description =
        'Grape Esca (black measles) "trunk diseases" caused by different wood-infecting fungi. The foliar symptom of Esca is an interveinal "striping". The "stripes", which start out as dark red in red cultivars and yellow in white cultivars, dry and become necrotic.';
      this.images = ['/images/grape_esca/1.jpeg','/images/grape_esca/2.jpeg','/images/grape_esca/3.jpeg','/images/grape_esca/4.jpeg'];;
      this.guides[0] =
        "Presently, there are no effective management strategies for measles.";
      this.guides[1] =
        "Wine grape growers with small vineyards will often have field crews remove infected fruit prior to harvest.";
      this.guides[2] =
        "Raisins affected by measles will be discarded during harvest or at the packing house, while table grape growers will leave affected fruit on the vine.";
      this.guides[3] =
        "A combination of rotating away from corn for one year followed by tillage is recommended to prevent the development of NCLB. Rotating to a non-host crop can reduce disease levels by allowing the corn debris on which the fungus survives to decompose before corn is planted again.";
      this.guides[4] =
        "Use resistant hybrids. Fungicides may be warranted on inbreds for seed production during the early stages of this disease. Crop rotation and tillage practices may be helpful in some cases.";
      this.source = "https://www.gardeningknowhow.com/edible/fruits/grapes";
    }
    if (this.$route.query.disease == "Grape Leaf Blight") {
        this.link='https://www.planthealthaustralia.com.au/wp-content/uploads/2013/11/Bacterial-blight-of-grapevine-FS.pdf'
      this.title = "";
      this.description =
        "Grape Leaf blight, also called Isariopsis leaf spot (Pseudocercospora vitis) on Grape (Vitus sp.) Scattered, somewhat angular, purple-brown spots on upper leaf surface. Corresponding, less conspicuous, brown spots on lower leaf surface.";
      this.images = ['/images/grape_l_blight/1.jpeg','/images/grape_l_blight/2.jpeg','/images/grape_l_blight/3.jpeg','/images/grape_l_blight/4.jpeg'];;
      this.guides[0] =
        "vines should be grown in full sun, in a well draining soil and in a location where there is good circulating air to reduce incidence of disease.";
      this.guides[1] =
        "Low lying areas should be avoided when selecting a planting site as this can lead to water accumulation during periods of wet weather Vines prefer a soil with a";
      this.guides[2] =
        "slightly acidic to neutral pH between 6.0 and 7.0 and require a trellis system to support the weight of the fruit on the vines.";
      this.guides[3] = "It is important not to cover the graft union in soil.";
      this.guides[4] =
        "Pruning is an essential component of healthy grape production";
    }
    if (this.$route.query.disease == "Peach Bacterial Spot") {
        this.link='https://www.canr.msu.edu/news/management_of_bacterial_spot_on_peaches_and_nectarines#:~:text=Leaf%20symptoms%20of%20bacterial%20spot,branch%20tips%2C%20and%20diseased%20twigs.'
      this.title = "";
      this.description =
        "Leaf symptoms of bacterial spot on peaches and nectarines are generally dark, small lesions, often clustered at the leaf tip where water collects during dews and rain. Leaf tissue around lesions can turn yellow.";
      this.images = ['/images/peach/1.jpeg','/images/peach/2.jpeg','/images/peach/3.jpeg','/images/peach/4.jpeg'];;
      this.guides[0] =
        "Compounds available for use on peach and nectarine for bacterial spot include copper, oxytetracycline (Mycoshield and generic equivalents),";
      this.guides[1] =
        " syllit+captan; however, repeated applications are typically necessary for even minimal disease control.";
      this.guides[2] =
        "Keep your peach trees healthy by properly pruning out any diseased or dead limbs and fertilize and water as necessary. ";
      this.guides[3] = "Too much nitrogen can aggravate the disease.";
      this.guides[4] =
        "While there are no completely successful sprays for control of this disease, chemical spray with copper based bactericide and the antibiotic oxytetracycline have some effect used preventatively.";
      this.source =
        "https://www.canr.msu.edu/news/management_of_bacterial_spot_on_peaches_and_nectarines#:~:text=Bacterial%20spot%20is%20an%20important,leaf%20spots%2C%20and%20twig%20cankers";
    }
    if (this.$route.query.disease == "Pepper Bell Bacterial Spot") {
        this.link='https://extension.wvu.edu/lawn-gardening-pests/plant-disease/fruit-vegetable-diseases/bacterial-leaf-spot-of-pepper#:~:text=Bacterial%20leaf%20spot%2C%20caused%20by,2005).'
      this.title = "";
      this.description =
        "While there are no completely successful sprays for control of this disease, chemical spray with copper-based bactericide and the antibiotic oxytetracycline have some effect used preventatively.";
      this.images = ['/images/pepper/1.jpeg','/images/pepper/2.jpeg','/images/pepper/3.jpeg','/images/pepper/4.jpeg'];;
      this.guides[0] =
        "Current chemical control is limited to copper or copper combined with maneb sprays that provide only marginal success thus making the disease very difficult to control once the epidemic is underway.";
      this.guides[1] =
        "When the disease occurs in commercial pepper fields early in the season, some farmers destroy the entire crop by disking because it is so difficult and economically costly to control once present in the field.";
      this.guides[2] =
        "Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing.";
      this.guides[3] =
        "Remove the affected leaves at the first sign to prevent the bacteria from jumping onto adjacent leaves.";
      this.guides[4] = "and Others";
    }
    if (this.$route.query.disease == "Potato Early Blight") {
        this.link='https://www.ndsu.edu/agriculture/ag-hub/publications/early-blight-potato#:~:text=Early%20blight%20of%20potato%20is,and%20marketability%20of%20the%20crop.'
      this.title = "";
      this.description =
        "Early blight of potato is caused by the fungal pathogen Alternaria solani. The disease affects leaves, stems and tubers and can reduce yield, tuber size, storability of tubers, quality of fresh-market and processing tubers and marketability of the crop.";
      this.images = [];
      this.guides[0] =
        "Treatment of early blight includes prevention by planting potato varieties that are resistant to the disease; late maturing are more resistant than early maturing varieties.";
      this.guides[1] =
        "Avoid overhead irrigation and allow for sufficient aeration between plants to allow the foliage to dry as quickly as possible.";
      this.guides[2] = "Practice a 2-year crop rotation.";
      this.guides[3] =
        "Keep the potato plants healthy and stress free by providing adequate nutrition and sufficient irrigation, especially later in the growing season after flowering when plants are most susceptible to the disease.";
      this.guides[4] = "and others";
      this.source =
        "https://www.gardeningknowhow.com/edible/vegetables/potato/potato-early-blight-treatment.htm#:~:text=Treatment%20of%20early%20blight%20includes,dry%20as%20quickly%20as%20possible.";
    }
    if (this.$route.query.disease == "Potato Late Blight") {
        this.link='https://www.ndsu.edu/agriculture/extension/publications/late-blight-potato'
      this.title = "";
      this.description =
        "Late blight will first appear as water-soaked spots, usually at the tips or edges of lower leaves where water or dew tends to collect. Under moist, cool conditions, water-soaked spots rapidly enlarge and a broad yellow halo may be seen surrounding the lesion. On the leaf underside, a spore-producing zone of white moldy growth approximately 0.1 - 0.2 inches wide may appear at the border of the lesion. Under continuously wet conditions, the disease progresses rapidly and warm, dry weather will slow or stop disease development. As conditions become moist and cool, disease development resumes. See pictures of late blight on stem and leaves.";
      this.images = [];
      this.guides[0] = "Use disease-free seeds and seedlings.";
      this.guides[1] =
        "Remove heavily infected tomato/potato plants from the field.";
      this.guides[2] = "Avoid excessive moisture/prolonged leaf wetness.";
      this.guides[3] = "Avoid excessive application of nitrogen.";
      this.guides[4] =
        "Preventive application of systematic fungicides (metalaxyl, mancozeb, copper-based).";
      this.source = "https://cropwatch.unl.edu/potato/late_blights_description";
    }
    if (this.$route.query.disease == "Squash Powdery Mildew") {
        this.link='https://www.gardeningknowhow.com/edible/vegetables/squash/powdery-mildew-in-squash.htm'
      this.title = "";
      this.description =
        "The first sign of powdery mildew on squash are small, white, dusty spots on the young leaves. Initially, there will only be a few spots, but it spreads quickly, eventually covering the entire leaf surface. Powdery mildew is most commonly seen on the top of the leaves, but it can also appear on the leaf undersides, the stems, and even on the fruits.";
      this.images = ['/images/squash/1.jpeg','/images/squash/2.jpeg','/images/squash/3.jpeg','/images/squash/4.jpeg'];
      this.guides[0] =
        "Provide good air circulation by spacing squash plants several feet apart.";
      this.guides[1] =
        "Don’t touch infected leaves and then touch healthy leaves. You’ve just spread spores";
      this.guides[2] =
        "Always plant squash in the full sun. Shady conditions are more humid and that encourages spore germination.";
      this.guides[3] =
        "Cut off any leaves that show early signs of infection ASAP. Toss them in the garbage or burn pile. Keep them out of the compost pile.";
      this.guides[4] =
        "Do not apply nitrogen fertilizer in the middle of the growing season. Doing so causes a flush of new growth which is more prone to the disease.";
    }
    if (this.$route.query.disease == "Strawberry Leaf Scorch") {
        this.link='https://content.ces.ncsu.edu/leaf-scorch-of-strawberry'
      this.title = "";
      this.description =
        "Scorched strawberry leaves are caused by a fungal infection which affects the foliage of strawberry plantings. The fungus responsible is called Diplocarpon earliana. Strawberries with leaf scorch may first show signs of issue with the development of small purplish blemishes that occur on the topside of leaves. Over time, the spots will continue to grow larger and darken. In severe cases, dark spots may even cover entire portions of strawberry plant leaves and cause them to completely dry and fall from the plant. Though the foliage of the infected plants is not aesthetically pleasing, it is seldom that the presence of this fungus impacts the quality of the strawberry crop itself.";
      this.images = ['/images/strawberry/1.jpeg','/images/strawberry/2.jpeg','/images/strawberry/3.jpeg','/images/strawberry/4.jpeg'];;
      this.guides[0] = "proper garden and sanitation are the key.";
      this.guides[1] =
        "removal of infected garden debris from the strawberry patch, as well as the frequent establishment of new strawberry transplants.";
      this.guides[2] =
        "The creation of new plantings and strawberry patches needed to maintaining a consistent strawberry harvest.";
      this.guides[3] =
        "Though the foliage of the infected plants is not aesthetically pleasing, it is seldom that the presence of this fungus impacts the quality of the strawberry crop itself.";
      this.guides[4] =
        "Do not apply nitrogen fertilizer in the middle of the growing season. Doing so causes a flush of new growth which is more prone to the disease.";
      this.source =
        "https://www.gardeningknowhow.com/edible/fruits/strawberry/strawberries-with-leaf-scorch.htm";
    }
    if (this.$route.query.disease == "Tomato Bacterial Spot") {
        this.link='https://hort.extension.wisc.edu/articles/bacterial-spot-of-tomato/#:~:text=Bacterial%20spot%20of%20tomato%20is%20caused%20by%20Xanthomonas%20vesicatoria%2C%20Xanthomonas,or%20may%20not%20show%20symptoms.'
      this.title = "";
      this.description =
        "Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans.  These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.  The pathogens enter plants through natural openings as well as through wounds.  Disease development is favored by warm (75° to 86°F), wet weather.";
      this.images = ['/images/totamato/1.jpeg','/images/tomato/2.jpeg','/images/tomato/3.jpeg','/images/tomato/4.jpeg'];
      this.guides[0] =
        "Plant pathogen-free seed or transplants to prevent the introduction of bacterial spot pathogens on contaminated seed or seedlings.";
      this.guides[1] =
        "If a clean seed source is not available or you suspect that your seed is contaminated, soak seeds in water at 122°F for 25 min. to kill the pathogens.";
      this.guides[2] =
        "To keep leaves dry and to prevent the spread of the pathogens, avoid overhead watering (e.g., with a wand or sprinkler) of established plants and instead use a drip-tape or soaker-hose.";
      this.guides[3] =
        "Do not apply nitrogen fertilizer in the middle of the growing season. Doing so causes a flush of new growth which is more prone to the disease.";
      this.guides[4] = "Avoid excessive application of nitrogen.";
    }
    if (this.$route.query.disease == "Tomato Early Blight") {
        this.link='https://content.ces.ncsu.edu/early-blight-of-tomato'
      this.title = "";
      this.description =
        "Early blight is a common tomato disease caused by the fungus Alternaria solani. It can affect almost all parts of the tomato plants, including the leaves, stems, and fruits. The plants may not die, but they will be weakened and will set fewer tomatoes than normal.1 Early blight generally attacks older plants, but it can also occur on seedlings. Stressed plants or plants in poor health are especially susceptible. Early blight is also a problem with potatoes.";
      this.images = ['/images/tomato_early/1.jpeg','/images/tomato_early/2.jpeg','/images/tomato_early/3.jpeg','/images/tomato_early/4.jpeg'];
      this.guides[0] =
        "A variety of fungicides are effective against early blight, but the fungi that cause this infection are becoming resistant in some areas.";
      this.guides[1] =
        "You need to find a fungicide that acts on multiple targets in the fungus at the same time, so resistance is less likely to develop.";
      this.guides[2] =
        "You may want to apply fungicide as a preventative measure. If so, apply it at fruit set, or just before, and reapply every 7 to 14 days, avoid harvesting your tomatoes within 7 days of application.";
      this.guides[3] =
        "Do not apply nitrogen fertilizer in the middle of the growing season. Doing so causes a flush of new growth which is more prone to the disease.";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://www.thespruce.com/early-blight-on-tomato-plants-1402973#:~:text=Early%20blight%20is%20a%20common,set%20fewer%20tomatoes%20than%20normal.";
    }

    if (this.$route.query.disease == "Tomato Late Blight") {
        this.link='https://vegpath.plantpath.wisc.edu/diseases/tomato-late-blight/#:~:text=Tomato%20leaf%20late%20blight%20lesions,show%20rings%20of%20pathogen%20growth.'
      this.title = "";
      this.description =
        "Late blight is a potentially devastating disease of tomato and potato, infecting leaves, stems, tomato fruit, and potato tubers. The disease spreads quickly in fields and can result in total crop failure if untreated. Leaves have large, dark brown blotches with a green gray edge; not confined by major leaf veins. Stem infections are firm and dark brown with a rounded edge.";
      this.images = ['/images/tomato_late/1.jpeg','/images/tomato_late/2.jpeg','/images/tomato_late/3.jpeg','/images/tomato_late/4.jpeg'];
      this.guides[0] =
        "Plant tomatoes where no tomatoes, potatoes, peppers or eggplants have been for the past 3-4 years.";
      this.guides[1] = "Keep leaves as dry as possible.";
      this.guides[2] = "Water in the morning so leaves dry quickly in the sun.";
      this.guides[3] = "Space plants so that air flows between them.";
      this.guides[4] = "Water with drip irrigation or a soaker hose.";
      this.source =
        "https://extension.umn.edu/disease-management/late-blight#cultural-controls-3038012";
    }
    if (this.$route.query.disease == "Tomato Leaf Mold") {
        this.link='https://www.vegetables.cornell.edu/crops/tomatoes/tomato-leaf-mold/'
      this.title = "";
      this.description =
        "Tomato leaf mold is typically only an issue in greenhouse and high-tunnel tomatoes. The disease is driven by high relative humidity (greater than 85%). Foliage is often the only part of the plant directly infected. Infection will cause infected leaves to wither and die, indirectly affecting yield. In severe cases, blossoms and fruit can also be infected, directly reducing yield. Leaf mold is caused by the fungus Passalora fulva (previously called Fulvia fulva or Cladosporium fulvum).";
      this.images = [];
      this.guides[0] =
        "Fungicide applications should be repeated according to label instructions. It is important to alternate between different chemical families to avoid the development of pathogen resistance to particular active ingredients.";
      this.guides[1] =
        "Space plants to provide good air movement between rows and individual plants.";
      this.guides[2] = "Use drip irrigation and avoid watering foliage.";
      this.guides[3] =
        "Scout for tomato leaf mold during periods of high humidity (over 85%).";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://extension.umn.edu/disease-management/tomato-leaf-mold#using-fungicides-2982863";
    }
    if (this.$route.query.disease == "Tomato Mosaic Virus") {
        this.link='https://www.creative-diagnostics.com/blog/index.php/what-is-tomato-mosaic-virus/#:~:text=Tomato%20mosaic%20virus%20strains%20occur,a%20diffuse%20chlorotic%20leaf%20spotting.&text=Treating%20mosaic%20virus%20is%20difficult,there%20are%20for%20fungal%20diseases.'
      this.title = "";
      this.description =
        "Tomato mosaic virus (ToMV) is a member of family tobamoviridae and belongs to the genus tobamovirus, which is a plant pathogenic virus. It is found worldwide and affects tomatoes and many other wide host range plants including many agricultural crops and weeds such as tobacco and beans, all of which can serve as inoculum sources. The tomato crop is highly susceptible to the Tomato mosaic virus (ToMV). The symptoms vary from tiles, wrinkle, reduction and curvature of leaflets, and irregular ripening of fruits.";
      this.images = ['/images/tomato_mosaic/1.jpeg','/images/tomato_mosaic/2.jpeg','/images/tomato_mosaic/3.jpeg','/images/tomato_mosaic/4.jpeg'];
      this.guides[0] =
        "To avoid seed-borne mosaic viruses, soak seeds of susceptible plants in a 10% bleach solution before planting.";
      this.guides[1] =
        "Control your weeds. Some types may serve as hosts for the disease, and when aphids and other insects feed on these plants, they will spread the viruses to your garden plants.";
      this.guides[2] =
        "Plant virus-resistant varieties in your garden. Resistant varieties of tomatoes have yet to be developed for cucumber mosaic virus, but tomatoes that are resistant to tobacco mosaic virus may have some slight resistance to cucumber mosaic virus as well.";
      this.guides[3] =
        "Do not apply nitrogen fertilizer in the middle of the growing season. Doing so causes a flush of new growth which is more prone to the disease.";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/tomato-mosaic-virus";
    }
    if (this.$route.query.disease == "Tomato Septoria Leaf Spot") {
        this.link='https://portal.ct.gov/CAES/Fact-Sheets/Plant-Pathology/Septoria-Leaf-Spot-of-Tomato#:~:text=Septoria%20leaf%20spot%20is%20caused,%2C%20stems%2C%20and%20the%20calyx.'
      this.title = "";
      this.description =
        "Septoria leaf spot is caused by the fungus Septoria lycopersici. This fungus can attack tomatoes at any stage of development, but symptoms usually first appear on the older, lower leaves and stems when plants are setting fruit. Symptoms usually appear on leaves, but can occur on petioles, stems, and the calyx.";
      this.images = [];
      this.guides[0] =
        "Destroying as much of the tomato debris as possible after harvest in the fall";
      this.guides[1] =
        "Mosaic viruses are mostly spread by insects, especially aphids and leafhoppers. You can try covering your plants with a floating row cover or aluminum foil mulches to prevent these insects from infecting your plants.";
      this.guides[2] =
        "You may want to apply fungicide as a preventative measure. If so, apply it at fruit set, or just before, and reapply every 7 to 14 days, avoid harvesting your tomatoes within 7 days of application.";
      this.guides[3] =
        "Control your weeds. Some types may serve as hosts for the disease, and when aphids and other insects feed on these plants, they will spread the viruses to your garden plants.	";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://www.thespruce.com/early-blight-on-tomato-plants-1402973#:~:text=Early%20blight%20is%20a%20common,set%20fewer%20tomatoes%20than%20normal.";
    }
    if (this.$route.query.disease == "Tomato Spider Mites") {
        this.link='https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite#:~:text=The%20tomato%20red%20spider%20mite,dense%20webbing%20can%20mummify%20plants.'
      this.title = "";
      this.description =
        "The tomato red spider mites are pale-orange to red and feed on the underside of leaves. They cannot be seen easily with the naked eye. Feeding damage caused by sucking sap appears as many shiny pale yellow marks on the top of the tomato leaf (see lower photo). Eventually the leaves turn brown and die or fall off. Severe attack leads to formation of webs on the plant (see photo). Red spider mites are difficult but not impossible to control.";
      this.images = ['/images/tomato_mites/1.jpeg','/images/tomato_mites/2.jpeg','/images/tomato_mites/3.jpeg','/images/tomato_mites/4.jpeg'];
      this.guides[0] =
        "Avoid continuous cropping of tomato and related plants which makes it difficult to control red spider mites, since they always have a plant to feed on.";
      this.guides[1] =
        "Remove remains (residues) from a previous crop and destroy before planting new crop.";
      this.guides[2] =
        "Inspect your crop borders for typical symptoms of red spider mite.";
      this.guides[3] =
        "Use fungicides with Sulphur, since they reduce populations of mites.";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://www.thespruce.com/early-blight-on-tomato-plants-1402973#:~:text=Early%20blight%20is%20a%20common,set%20fewer%20tomatoes%20than%20normal.";
    }
    if (this.$route.query.disease == "Tomato Target Spot") {
        this.link='https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite#:~:text=The%20tomato%20red%20spider%20mite,dense%20webbing%20can%20mummify%20plants.'
      this.title = "";
      this.description =
        "Also known as early blight, target spot of tomato is a fungal disease that attacks a diverse assortment of plants, including papaya, peppers, snap beans, potatoes, cantaloupe, and squash as well as passion flower and certain ornamentals. Target spot on tomato fruit is difficult to control because the spores, which survive on plant refuse in the soil, are carried over from season to season. Read on to learn how to treat target spot on tomatoes.";
      this.images = ['/images/tomato_target/1.jpeg','/images/tomato_target/2.jpeg','/images/tomato_target/3.jpeg','/images/tomato_target/4.jpeg'];
      this.guides[0] =
        "Remove old plant debris at the end of the growing season; otherwise, the spores will travel from debris to newly planted tomatoes.";
      this.guides[1] =
        "Dispose of the debris properly and don’t place it on your compost pile unless you’re sure your compost gets hot enough to kill the spores.";
      this.guides[2] =
        "Rotate crops and don’t plant tomatoes in areas where other disease-prone plants have been located in the past year– primarily eggplant, peppers, potatoes or, of course– tomatoes.";
      this.guides[3] =
        "Pay careful attention to air circulation, as target spot of tomato thrives in humid conditions. Grow the plants in full sunlight. Be sure the plants aren’t crowded and that each tomato has plenty of air circulation.";
      this.guides[4] = "Avoid excessive application of nitrogen.";
      this.source =
        "https://apps.lucidcentral.org/pppw_v10/text/web_full/entities/tomato_target_spot_163.htm";
    }
    if (this.$route.query.disease == "Tomato Yellow Leaf Curl virus") {
        this.link='https://ipm.ifas.ufl.edu/agricultural_ipm/tylcv_home_mgmt.shtml'
      this.title = "";
      this.description =
        "Tomato yellow leaf curl is a disease of tomato caused by Tomato yellow leaf curl virus. infected tomato plants initially show stunted and erect or upright plant growth; plants infected at an early stage of growth will show severe stunting. However, the most diagnostic symptoms are those in leaves. Leaves of infected plants are small and curl upward; and show strong crumpling and interveinal and marginal yellowing. The internodes of infected plants become shortened and, together with the stunted growth, plants often take on a bushy appearance";
      this.images = ['/images/tomato_curl/1.jpeg','/images/tomato_curl/2.jpeg','/images/tomato_curl/3.jpeg','/images/tomato_curl/4.jpeg'];
      this.guides[0] = "Before planting select TYLCV-resistant varieties.";
      this.guides[1] = "Use virus- and whitefly-free transplants.";
      this.guides[2] =
        "Practice good weed management in and around fields to the extent feasible.";
      this.guides[3] =
        "Remove and destroy old crop residue and volunteers on a regional basis.";
      this.guides[4] =
        "Rogue diseased plants when incidence of virus infection is low.";
      this.source =
        "https://www.frontiersin.org/articles/10.3389/fpls.2020.599697/full";
    }
  },
};
</script>

<style>
</style>