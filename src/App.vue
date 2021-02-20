<template>
  <div id="app">
    <TopMenu></TopMenu>
    <b-container fluid class="bg-app">
      <b-row align-v="start"><b-col>-</b-col></b-row>
      <b-row class="text-light-50" align-v="center">
        <b-col cols="1" md="3"></b-col>
        <b-col cols="10" md="6" class="content">
          <b-alert v-for="error in errors" :key="error.request" variant="danger"
                  dismissible
                  :show="showAlert"
                  @dismissed="showAlert=false"
                  fade
                  class="app-alert">
            {{error.response.data}}
          </b-alert>
          <router-view></router-view>
          <div class="introduction">
            <h1>Loosely Coupled</h1>
            <h2>A web development company</h2>
            <div>
              Specializes in APIs, integrations & process automation.
              <br></br>
              Experienced with:
              <br></br>
              <b-list-group>
                <b-list-group-item variant="dark">OpenAPI / Swagger</b-list-group-item>
                <b-list-group-item variant="dark">REST</b-list-group-item>
                <b-list-group-item variant="dark">SOAP</b-list-group-item>
                <b-list-group-item variant="dark">BPMN</b-list-group-item>
                <b-list-group-item variant="dark">Camunda</b-list-group-item>
              </b-list-group>
              <br></br>
            </div>
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="melvinloos">
              <a class="LI-simple-link" href='https://nl.linkedin.com/in/melvinloos?trk=profile-badge'>Melvin Loos</a>
            </div>
          </div>
        </b-col>
        <b-col cols="1" md="3"></b-col>
      </b-row>
      <b-row align-v="end"><b-col>-</b-col></b-row>
      <b-navbar type="dark" fixed="bottom" class="text-center">
        <b-navbar-nav class="nav-footer">
            <b-nav-text>{{copyright}}</b-nav-text>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import TopMenu from "./TopMenu.vue";
import VueRouter from 'vue-router';
import Page from './Pages/Default.vue';

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
    TopMenu,
    Page,
  }
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}

#app:before {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300c7ff' fill-opacity='0.16'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  content: "";
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: -1;
  animation: scrolling-background 3s linear 1s infinite running;
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

@keyframes scrolling-background {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100px -100px;
  }
}

.content
{
  margin-top: 76px;
  color: #FFFFFF;
  background-color: #000000;
}

.introduction
{
  text-align: center;
}

.nav-footer
{
  margin: auto;
}
</style>
