<template>
  <div class="dashboard">
    <div class="page">
      <div class="header">
        <h2>Dashboard To Do's</h2>
      </div>
      <hr>
      <CardComponent :cardList="links" />
      <div class="header">
        <h2>Completed :)</h2>
      </div>
      <hr>
      <CompletedCardComponent :cardList="links" />
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue"
import CompletedCardComponent from "../components/CompletetedCardComponent.vue"

export default {
  name: 'DashboardView',
  components: {
      CardComponent,
      CompletedCardComponent
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

.header {
  margin: auto;
  margin-top: 30px;
  max-width: 400px;
  text-align: center;
}

hr {
  width: 70%;
  margin: auto;
  margin-top: 20px;
  color: #2c3e50;
}

</style>
