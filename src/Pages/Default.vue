<template>
    <div>
      <b-row id="header">
          <b-col sm="1"></b-col> 
          <b-col sm="10" class="text-center" style="margin: auto;">
              <!-- <h1 class="text-light">{{page.title}}</h1> -->
          </b-col> 
          <b-col sm="1"></b-col> 
      </b-row>
      <b-row class="text-light text-center">
          <b-col sm="1" lg="3"></b-col> 
          <b-col>
              <div v-if="error" class="error">
                {{ error }}
              </div>
              
              <div v-if="page" v-html="page.body"></div>
          </b-col>
          <b-col sm="1" lg="3"></b-col> 
      </b-row>
    </div>
</template>

<script>
import { HTTP } from "../http-common.js";

export default {
  data () {
    return {
      page: null,
      error: null
    }
  },
  methods: {
    setData (page) {
      this.page = page
    }
  }
}
</script>

<style>
.svg-fix {
  /* Fix for ie-10 */
  width: 100% \9;
}

#header {
  padding: 12% 8%;
}
</style>
