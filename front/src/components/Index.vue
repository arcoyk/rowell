<template>
  <div id="app" class="container row">
    <div class="col s4">
      side
    </div>
    <div class="col s8">
      main
      <card
        v-bind:c_title="'Good Days'"
        v-bind:c_content="'Good days gone'"
        v-bind:c_link="'http://baddays.com'"
        v-bind:c_link_title="'Bad Days'"
      >
      </card>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import card from "./card"

export default {
  name: "index",
  components: {
    card
  },
  created: function() {
  },
  computed: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
