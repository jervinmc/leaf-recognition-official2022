<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="false"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="false" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- is not logged in yet -->
    <v-app-bar color="white" v-if="true" :clipped-left="clipped" fixed app>
      <div align="start">
        <v-img
          class="pointer"
          src="/images/logo2.png"
          height="50"
          width="100"
          contain
          @click="goIndex"
        />
      </div>
      <v-spacer />
      <div
        v-if="!$vuetify.breakpoint.xs"
        :class="
          $route.name == 'scanner'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('scanner')"
      >
        Scanner
      </div>
      <div
        v-else
        @click="pushRoute('scanner')"
         :class="
          $route.name == 'tips'
            ? 'px-5 pointer secondary--text'
            : 'px-5 pointer'
        "
      >
        Scanner
      </div>
      <div
         v-if="!$vuetify.breakpoint.xs"
        :class="
          $route.name == 'tips'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('tips')"
      >
        Growing Tips
      </div>
      <div
       v-else
        :class="
          $route.name == 'tips'
            ? ' pointer secondary--text'
            : ' pointer'
        "
        @click="pushRoute('tips')"
      >
        Growing Tips
      </div>
      <div
        :class="
          $route.name == 'about'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('about')"
        v-if="!$auth.loggedIn"
      >
        About us
      </div>
      <div
        :class="
          $route.name == 'client-profile'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('client/profile')"
        v-else
      >
        My Profile
      </div>
      <div class="mx-5" v-if="$auth.loggedIn">
         <v-badge
          color="secondary"
          content="5"
          right
          overlap
          transition="slide-x-transition"
        >
        <v-icon class="pointer">mdi-cart-outline</v-icon>
         </v-badge> 
      </div>
      
      <div v-if="$auth.loggedIn">
        <v-badge
          color="secondary"
          content="99+"
          right
          overlap
          transition="slide-x-transition"
        >
          <v-icon class="pointer">mdi-bell-outline</v-icon>
        </v-badge>
      </div>
      <!-- <div class="px-10 pointer" v-if="!$auth.loggedIn">
        <v-btn dark depressed color="secondary" @click="pushRoute('register')">
          Sign up
        </v-btn>
      </div> -->
      <!-- <div class="px-10 pointer" v-else>
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div> -->
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer padless>
      <v-card flat tile>
        <v-card-text>
         
        </v-card-text>

        <v-card-text  :class="!$vuetify.breakpoint.xs ? 'black--text pt-0 text-h3 secondary--text pa-5' : 'black--text pt-0 text-h5 secondary--text '">
       A healthy plant is one that adapts best to the situation in which it finds itself. There is no objective measure in this.
       <div>
         ~Monty Don
       </div>
        </v-card-text>

        <v-divider></v-divider>
        <div align="center">
           <!-- <v-btn
            icon
            @click="locate('instagram')"
          >
            <v-icon size="24px" color="secondary">
              mdi-instagram
            </v-icon>
          </v-btn> -->
          <v-btn
            icon
            @click="locate('facebook')"
          >
            <v-icon size="24px" color="secondary">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn
            icon
            @click="locate('twitter')"
          >
            <v-icon size="24px" color="secondary">
              mdi-twitter
            </v-icon>
          </v-btn>
           <v-btn
           title="banditbringer28@gmail.com"
            icon
     
          >
            <v-icon size="24px" color="secondary">
              mdi-gmail
            </v-icon>
          </v-btn>
          iplantphofficial@gmail.com

        </div>
        <!-- <div>
            <v-row class="pt-5">
              <v-col align="end">
                <v-icon color="secondary">
                 mdi-gmail
                </v-icon>
              </v-col>
              <v-col class="secondary--text">
                  -banditbringer28@gmail.com
              </v-col>
            </v-row>
        </div> -->

        <v-card-text class="secondary--text">
          <a href="https://www.freepik.com/vectors/claim"
            >Claim vector created by pch.vector - www.freepik.com</a
          >
          {{ new Date().getFullYear() }} — <strong>I-Plant</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    locate(social){
      if(social=='facebook') location="https://www.facebook.com/JsnX28?mibextid=ZbWKwL"
      else if(social=='twitter') location="https://twitter.com/I_Plantofficial?s=07"
    },

    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
