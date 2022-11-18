<template>
  <div class="pa-16">
    <div class="text-h4 pa-5" align="center">
        <b>Recommendation</b>
    </div>
    <div align="center">
        <v-card class="pa-5" >
           <div class="text-h4">
             {{$route.query.disease}}
           </div>
            <div class="pt-5" align="start">
                How to manage diseases:
            </div>
            <div align="start">
                <ul>
                    <li>
                         {{guides[0]}}
                    </li>
                     <li>
                         {{guides[1]}}
                    </li>
                     <li>
                         {{guides[2]}}
                    </li>
                     <li>
                         {{guides[3]}}
                    </li>
                     <li>
                         {{guides[4]}}
                    </li>
                </ul>
            </div>
        </v-card>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            description:"Scorched strawberry leaves are caused by a fungal infection which affects the foliage of strawberry plantings. The fungus responsible is called Diplocarpon earliana.",
            images:[

            ],
            guides:[
                'removal of infected garden debris from the strawberry patch',
                'creation of new plantings and strawberry patches is key to maintaining a consistent strawberry harvest',
                'avoidance of waterlogged soil and frequent garden cleanup will help to reduce the likelihood of spread of this fungus.',
                'Use drip irrigation if possible. When using overhead irrigation, shorten sets and water at times that promote rapid drying of the foliage.',
                'Space plants so foliage dries rapidly after rain and irrigation.'
            ],
            source:''
        }
    },
    methods:{

    },
    created(){
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Tomato Bacterial Spot'){
            this.description = 'Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans. These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.'
            this.images = []
            this.guides[0]='remove the affected leaves at the first sign to prevent the bacteria from jumping onto adjacent leaves.'
            this.guides[1]='Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing.'
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Healthy'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Tomato Bacterial Spot'){
            this.title = ''
            this.description = 'Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans. These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.'
            this.images = []
            this.guides[0]='remove the affected leaves at the first sign to prevent the bacteria from jumping onto adjacent leaves.'
            this.guides[1]='Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing.'
            this.guides[2]='Your best bet is prevention and mechanical control at the first sign of symptoms of bacterial leaf spot.'
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.source = 'https://www.gardeningknowhow.com/plant-problems/disease/bacterial-leaf-spot.htm'
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Tomato Early Blight'){
            this.title = ''
            this.description = 'Blight on tomatoes is caused by a fungal infection and like all fungi, they are spread by spores and require damp, warm weather conditions to flourish which affects leaves, fruits and stems and can be severely yield-limiting when susceptible tomato cultivars are used and weather is favorable. Severe defoliation can occur. In tomatoes, fruit can be damaged by sun.'
            this.images = []
            this.guides[0]='Cover the soil under the plants with mulch, such as fabric, straw, plastic mulch, or dried leaves.'
            this.guides[1]='Water at the base of each plant, using drip irrigation, a soaker hose, or careful hand watering.'
            this.guides[2]='Most home gardeners dont need to treat tomatoes with a fungicide. Tomato plants can tolerate a lot of early blight without reducing the number of tomatoes they produce.'
            this.guides[3]='Keep leaves dry to reduce spreading the disease.'
            this.guides[4]='Increase airflow by staking or trellising, removing weeds, and spacing plants adequately apart'
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
            this.source='https://extension.umn.edu/disease-management/early-blight-tomato'
        }
        if(this.$route.query.disease=='Tomato Late Blight'){
            this.title = ''
            this.description = 'Late blight tomato disease is the rarest of the blights that affect both tomatoes and potatoes, but it is also the most destructive. Tomato Late Blight is a fungus-like organism that can destroy a crop within days if conditions are right. Vigilant observation'
            this.images = []
            this.guides[0]='Sanitation is the first step in controlling tomato late blight. Clean up all debris and fallen fruit from the garden area.'
            this.guides[1]='There are no strains of tomato available that are resistant to late tomato blight, so plants should be inspected at least twice a week.'
            this.guides[2]='Since late blight symptoms are more likely to occur during wet conditions, more care should be taken during those times.'
            this.guides[3]='All infected plants must be immediately removed and destroyed.'
            this.guides[4]=''
            this.source='https://extension.umn.edu/disease-management/late-blight'
        }
        if(this.$route.query.disease=='Tomato Leaf Mold'){
            this.title = ''
            this.description = 'Tomato leaf mold is a fungal disease that can develop when there are extended periods of leaf wetness and the relative humidity is high (greater than 85 percent). Due to this moisture requirement, the disease is seen primarily in hoophouses and greenhouses.'
            this.images = []
            this.guides[0]='Sanitize the greenhouse between crop seasons.'
            this.guides[1]='If growing tomatoes in a greenhouse, maintain night temps higher than outside temperatures.'
            this.guides[2]='When planting, use only certified disease-free seed or treated seed.'
            this.guides[3]='Remove and destroy all crop debris post-harvest.'
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Corn Common Rust'){
            this.title = ''
            this.description = 'Common rust of sweet corn is caused by the fungus Puccinia sorghi and can result in serious losses in yield or quality of sweet corn.  Early symptoms of common rust are chlorotic flecks on the leaf surface.'
            this.images = []
            this.guides[0]='The best management practice is to use resistant corn hybrids.'
            this.guides[1]='To reduce the incidence of corn rust, plant only corn that has resistance to the fungus.'
            this.guides[2]='Resistance is either in the form of race-specific resistance or partial rust resistance.'
            this.guides[3]='If the corn begins to show symptoms of infection, immediately spray with a fungicide.'
            this.guides[4]='The fungicide is most effective when started at the first sign of infection.'
            this.source='https://www.gardeningknowhow.com/edible/vegetables/corn/corn-rust-fungus-control.htm'
        }
        if(this.$route.query.disease=='Corn Northern Leaf Blight'){
            this.title = ''
            this.description = 'Northern corn leaf blight (NCLB), caused by the fungus Exserohilum turcicum. During wet weather yield losses may be as high as 30-50% if the disease becomes establishes before tasseling. However, if leaf damage is only moderate or is delayed until 6 weeks'
            this.images = []
            this.guides[0]='Planting resistant hybrids is the most effective method for controlling NCLB.'
            this.guides[1]='A one- to two-year rotation away from corn and destruction of old corn residues by tillage will be helpful for controlling NCLB.'
            this.guides[2]='Fungicide sprays are recommended for fresh market sweet corn, hybrid seed production, and dent corn fields planted with susceptible hybrids.'
            this.guides[3]=''
            this.guides[4]=''
            this.source='https://ohioline.osu.edu/factsheet/plpath-cer-10'
        }
        if(this.$route.query.disease=='Grape Black Rot'){
            this.title = ''
            this.description = 'Black rot of grapes is a fungal disease that persists in grapevines for many years without treatment. The earliest signs of disease appear as yellow circular lesions on young leaves. As these lesions spread, they brown and sprout black fungal fruiting bodies that look similar to grains of pepper.'
            this.images = []
            this.guides[0]='The best time to treat black rot of grapes is between bud break until about four weeks after bloom; treating outside of this window is likely to end in frustration.'
            this.guides[1]='Prevention is key when dealing with grape black rot. During your fall clean-up, make sure that all mummies have been removed from the vine and all plant material on the ground below is destroyed.'
            this.guides[2]='Captan and myclobutanil are the fungicides of choice.'
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Grape Esca'){
            this.title = ''
            this.description = 'Grape Esca (black measles) "trunk diseases" caused by different wood-infecting fungi. The foliar symptom of Esca is an interveinal "striping". The "stripes", which start out as dark red in red cultivars and yellow in white cultivars, dry and become necrotic.'
            this.images = []
            this.guides[0]='Presently, there are no effective management strategies for measles.'
            this.guides[1]='Wine grape growers with small vineyards will often have field crews remove infected fruit prior to harvest.'
            this.guides[2]='Raisins affected by measles will be discarded during harvest or at the packing house, while table grape growers will leave affected fruit on the vine.'
            this.guides[3]=''
            this.guides[4]=''
            this.source='https://www.gardeningknowhow.com/edible/fruits/grapes'
        }
        if(this.$route.query.disease=='Grape Leaf Blight'){
            this.title = ''
            this.description = 'Grape Leaf blight, also called Isariopsis leaf spot (Pseudocercospora vitis) on Grape (Vitus sp.) Scattered, somewhat angular, purple-brown spots on upper leaf surface. Corresponding, less conspicuous, brown spots on lower leaf surface.'
            this.images = []
            this.guides[0]='vines should be grown in full sun, in a well draining soil and in a location where there is good circulating air to reduce incidence of disease.'
            this.guides[1]='Low lying areas should be avoided when selecting a planting site as this can lead to water accumulation during periods of wet weather Vines prefer a soil with a'
            this.guides[2]='slightly acidic to neutral pH between 6.0 and 7.0 and require a trellis system to support the weight of the fruit on the vines.'
            this.guides[3]='It is important not to cover the graft union in soil.'
            this.guides[4]='Pruning is an essential component of healthy grape production'
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        if(this.$route.query.disease=='Strawberry Leaf Scorch'){
            this.title = ''
            this.description = ''
            this.images = []
            this.guides[0]=''
            this.guides[1]=''
            this.guides[2]=''
            this.guides[3]=''
            this.guides[4]=''
        }
        
    }
}
</script>

<style>

</style>