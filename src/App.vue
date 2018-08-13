<template>
  <div id="app">
    <TopMenu></TopMenu>
    <b-container fluid class="bg-app" v-lazy:background-image="imgUrl">
      <b-row class="text-light-50">
        <b-col cols="1" md="3"></b-col>
        <b-col cols="10" md="6">
          <b-alert v-for="error in errors" :key="error.request" variant="danger"
                  dismissible
                  :show="showAlert"
                  @dismissed="showAlert=false"
                  fade
                  class="app-alert">
            {{error.response.data}}
          </b-alert>
          <router-view></router-view>
          <b-navbar type="dark" fixed="bottom" class="text-center">
            <b-navbar-nav>
                <b-nav-item></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-text>{{copyright}}</b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav >
                <b-nav-item></b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
        <b-col cols="1" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopMenu from "./TopMenu.vue";
import VueRouter from 'vue-router';

export default {
  name: "app",
  data() {
    return {
      errors: this.$errors,
      imgUrl: '/src/assets/background_nebula.jpg'
    };
  },
  computed: {
    showAlert: function () {
      return true;
    },
    copyright: function () {
      var d = new Date();
      return '© ' + d.getFullYear() + ' Loosely Coupled';
    }
  },
  components: {
    TopMenu
  }
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}

.app-alert {
  z-index: 99999;
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

.bg-app {
  height: 100%;
  background-color: #000;
  background-size: cover;
  background-position: center;
  transition-property: background-image;
  transition-duration: 5s;
}
</style>
