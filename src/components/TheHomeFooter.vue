<template>
  <div>
    <footer>
      <the-home-nav class="wedesign_restrant_menu" />
      <the-login-logout id="login_logout_myPage" />
    </footer>
  </div>
</template>

<script>
import TheHomeNav from "./TheHomeNav.vue";
import TheLoginLogout from "./TheLoginLogout.vue";
export default {
  components: { TheHomeNav, TheLoginLogout },
};
</script>

<style scoped>
footer {
  position: relative;
  height: 5vh;
  background-color: black;
}
.wedesign_restrant_menu {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-right: 10px;
  font-family: "Noto Serif JP", serif;
}
#login_logout_myPage {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  color: white;
  font-size: 18px;
  font-family: "Noto Serif JP", serif;
}
</style>
