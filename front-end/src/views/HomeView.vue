<template>
  <div class="home">
    <div class="intro">
      <div class="inline">
        <h2>Hi, I'm Taylor LeSueur.</h2>
        <img src="../assets/taylor-circle-small.jpg">
      </div>
      <hr>
      <p>I'm a innovate amazing products, develop clean software, and solve problems. This is my personal time management dashboard. I use the Dashboard tab to store my commonly used links and keep track of daily to-do's. I use the Time Tracker to track time spent on each of my activities. Thanks for checking it out!</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      searchText: '',
    }
  },
}
</script>

<style scoped>
hr {
  width: 50%;
  color: #2c3e50;
  margin-bottom: 50px;
}

.intro {
  width: 900px;
  margin: auto;
  margin-top:25px;
  margin-bottom: 100px;
}

.intro h2 {
  margin-top: 70px;
  margin-bottom: 20px;
  float:left;
}

.intro img {
  width: 300px;
  float: right;
  margin: 50px;
  margin-top: 70px;
}
</style>
