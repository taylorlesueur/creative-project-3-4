<template>
  <div id="app">
    <div class="header-div">
      <router-link to="/">
        <img class="header-logo" alt="Taylor's logo" src="./assets/lightbulb-logo.png">
      </router-link>
      <router-link to="/time" class="nav-link">
        Track Time
      </router-link>
      <router-link to="/dashboard" class="nav-link">
        Dashboard
      </router-link>
      <router-link to="/" class="nav-link">
        Home
      </router-link>
    </div>
    
    <router-view />

    <div class="footer-div">
      <a href="https://www.linkedin.com/in/taylor-lesueur/">
        <img class="footer-logo" src="./assets/social-logos/linkedin.png">
      </a>
      <a href="https://github.com/taylorlesueur/creative-project-3-4">
        <img class="footer-logo" src="./assets/social-logos/github.png">
      </a>
      <a href="https://www.facebook.com/taylor.lesueur.3">
        <img class="footer-logo" src="./assets/social-logos/facebook.png">
      </a>
      <a href="https://www.instagram.com/taylorlesueur/">
        <img class="footer-logo" src="./assets/social-logos/instagram.png">
      </a>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>



<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3D4C53;
  font-size: 22px;
}

.header-div {
    width: 100%;
    height: 80px;
    background-color: #DBF3FA;   
}
.header-logo {
    height: 80px;
    margin-left: 30px;
    align-self: left;
}

.nav-link {
  margin-right: 50px;
  margin-top: 27px;
  float: right;
  text-decoration: none;
  color: #3D4C53;
}

.footer-div {
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;   
    background-color: #DBF3FA; 
    text-align: center;
}
.footer-logo {
    margin-top: 25px;
    width: 50px;
    height: 50px;
}
.footer-div a {
  margin-left: 15px;
  margin-right: 15px;
}
</style>