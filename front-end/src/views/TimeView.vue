<template>
  <div class="report">
    <div class="page">
      <div class="quote">
        <h3>A procrastinator is a thief of his or her own time.</h3>
        <p><em>- Jhoon Goo Rhee</em></p>
      </div>
      <hr>
      <TimeCardComponent :cardList="links" />
    </div>
  </div>
</template>

<script>
import TimeCardComponent from "../components/TimeCardComponent.vue"

export default {
  name: 'TimeView',
  components: {
      TimeCardComponent
  },
  computed: {
    links() {
      return this.$root.$data.links;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  max-width: 900px;
  margin: auto;
  margin-top:25px;
  text-align: center;
}
.quote {
  margin: auto;
  margin-top: 30px;
  max-width: 400px;
}
.quote p {
  text-align: right;
}
hr {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  color: #2c3e50;
}
</style>
