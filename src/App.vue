<template>
  <div id="app">
    <b-navbar toggleable="false" type="dark">
          <b-navbar-brand href="#"><b-img src="./assets/icon-left-font-monochrome-white.svg" width="225" height="50" alt="Loosely Coupled" /></b-navbar-brand>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <!-- todo -->
                <b-nav-item>About</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container fluid class="bg-nebula">
          <b-row id="header">
            <b-col sm="1"></b-col> 
            <b-col sm="10" class="text-center" style="margin: auto;">
              <b-img class="svg-fix" src="./assets/icon.svg" fluid width="400" height="400" alt="Logo" />
            </b-col> 
            <b-col sm="1"></b-col> 
          </b-row>
          <b-row class="text-light text-center">
            <b-col></b-col> 
            <b-col>
              <h1>Welcome to the new age</h1>
              <p>
                As we evolve, be it ourselves or our tech, we continue to abstract things as we put them into perspective.
                And when we abstract things we remove the tight connection between them, allowing use to combine, exchange and experiment.
                Therefore bringing us new insights, possiblities and in the end progress...
              </p>
              <h2>An evolution</h2>
              <p>
                At Loosely Coupled our name is our mission: coupled but loose, integrated but fluid, unified but still indivual parts.
                As time moves on, things change. People change, requirements change, whatever it is, we have to adapt to a new situation.
                <br />
                And as with big chores, chopping things into smaller pieces makes it easier. It gives a better overview of what is what 
                and what is important (and what is not). This is the way we work, this is what we build. 
              </p>
              <h2>Everything changes, why not your software?</h2>
              <p></p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </b-col>
            <b-col></b-col> 
          </b-row>
          <b-row class="text-light-50">
            <b-col></b-col>
            <b-col cols="6">
              <b-navbar type="dark" >
                <b-navbar-nav>
                  <b-nav-item></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-item></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-item></b-nav-item>
                </b-navbar-nav>
              </b-navbar>
            </b-col>
            <b-col></b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    background () {
      return require('./assets/' + this.id + '.svg')
    }
  }
}
</script>

<style lang="scss">
body,html {
  height: 100%;
}

.bg-dark {
  background-color: #000 !important;
}

#nav_collapse {
  
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
  background: url('./assets/background_nebula.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.svg-fix {
  /* Fix for ie-10 */
  width: 100% \9;
}

#header {
  padding: 12% 8%;
}
</style>
