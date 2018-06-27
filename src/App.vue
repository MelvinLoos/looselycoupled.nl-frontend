<template>
  <div id="app">
    <b-navbar toggleable="false" type="dark" fixed="top" class="bg-dark">
      <b-navbar-brand href="#"><b-img src="./assets/icon-left-font-monochrome-white.svg" width="225" height="50" alt="Loosely Coupled" /></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-row class="text-center">
          <b-col sm="1" lg="3"></b-col>
          <b-col>
            <b-navbar-nav v-for="page in pages">
              <!-- todo -->
              <b-nav-item :to="page.url">{{page.title}}</b-nav-item>
            </b-navbar-nav>
          </b-col>
          <b-col sm="1" lg="3"></b-col> 
        </b-row>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="bg-nebula">
      <!-- component matched by the route will render here -->
      <router-view>

      </router-view>
    </b-container>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import {HTTP} from './http-common.js';

export default {
  name: "app",
  data() {
    return {
      pages: [],
      errors: []
    };
  },
  computed: {
    background() {
      return require("./assets/" + this.id + ".svg");
    }
  },
  created() {
    HTTP.get('collections/get/pages')
    .then(response => {
      this.pages = response.data.entries;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

.bg-dark {
  background-color: #000 !important;
}

.navbar-top {
  padding: 0;
}

.navbar-brand {
  padding-left: 10px;
}

.navbar-nav {
  padding: 0 5%;
}

.bg-nebula {
  background: url("./assets/background_nebula.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
