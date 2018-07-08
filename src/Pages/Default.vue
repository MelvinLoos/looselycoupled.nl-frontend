<template>
    <div>
        <b-row id="header">
            <b-col sm="1"></b-col> 
            <b-col sm="10" class="text-center" style="margin: auto;">
                <b-img class="svg-fix" src="../assets/icon.svg" fluid width="400" height="400" alt="Logo" />
                {{page.title}}
            </b-col> 
            <b-col sm="1"></b-col> 
        </b-row>
        <b-row class="text-light text-center">
            <b-col sm="1" lg="3"></b-col> 
            <b-col>
                {{page.body}}
            </b-col>
            <b-col sm="1" lg="3"></b-col> 
        </b-row>
    </div>
</template>

<script>
import {HTTP} from '../http-common.js';

export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  data() {
    return {
      page: {},
      errors: []
    };
  },
  // created() {
  //   HTTP.post('collections/get/pages', {
  //       filter: {title: 'about'}
  //   })
  //   .then(response => {
  //     this.page = response.data.entries.shift();
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  //   console.log(this.$route)
  // }
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
