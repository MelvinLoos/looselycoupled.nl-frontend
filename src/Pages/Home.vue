<template>
    <div>
        <b-row id="header">
            <b-col sm="1"></b-col> 
            <b-col sm="10" class="text-center" style="margin: auto;">
                <b-img class="svg-fix" src="../assets/icon.svg" fluid width="400" height="400" alt="Logo" />
            </b-col> 
            <b-col sm="1"></b-col> 
        </b-row>
        <b-row class="text-light text-center">
            <b-col sm="1" lg="3"></b-col> 
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
            <b-col sm="1" lg="3"></b-col> 
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
    </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
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
