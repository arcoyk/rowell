<template>
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="../../static/sample.png">
          <span class="card-title">
            {{ c_title }}
          </span>
        </div>
        <div class="card-content">
          {{ c_content }}
        </div>
        <div class="card-action">
          <a v-bind:href="c_link">
            c_link_title
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "card",
  props: ["c_title", "c_content", "c_link", "c_link_title"],
  components: {
  },
  created: function() {
  },
  methods: {
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
