<template>
    <b-navbar id="top_navigation" toggleable="false" type="dark" fixed="top" class="bg-dark">
        <b-navbar-brand href="/"><b-img src="/src/assets/icon-left-font-monochrome-white.svg" width="225" height="50" alt="Loosely Coupled" /></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <!-- <div class="bg-semitransparent"></div> -->
          <b-row class="text-center">
              <b-col sm="1" lg="3"></b-col>
              <b-col>
                <b-navbar-nav>
                    <b-nav-item v-for="page in pages" v-bind:key="page.title" :to="page">{{page.title}}</b-nav-item>
                </b-navbar-nav>
              </b-col>
              <b-col sm="1" lg="3"></b-col> 
          </b-row>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "top-menu",
  methods: {
    updateMenuVisibility (event) {
    }
  },
  data() {
    return {
      pages: this.$router.options.routes
    };
  },
  created () {
    window.addEventListener('scroll', this.updateMenuVisibility);
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateMenuVisibility);
  }
};
</script>

<style lang="scss">
#top_navigation {
  -webkit-transition: background-color 500ms ease-out 1s;
  -moz-transition: background-color 500ms ease-out 1s;
  -o-transition: background-color 500ms ease-out 1s;
  transition: background-color 500ms ease-out 1s;
}

.bg-dark {
  background-color: #000 !important;
}

.bg-semitransparent {
  height: 100%;
  width: 100%;
  background-color: #000;
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

#nav_collapse {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
