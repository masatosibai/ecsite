<template>
  <div>
    <footer>
      <the-home-nav class="wedesign_restrant_menu" />
      <!-- <div>
        <ul>
          <li>
            <i class="fab fa-instagram " />
          </li>
          <li>
            <i class="fab fa-twitter " />
          </li>
          <li>
            <i class="fab fa-facebook-f " />
          </li>
        </ul>
      </div> -->
    </footer>
  </div>
</template>

<script>
import TheHomeNav from "./TheHomeNav.vue";
export default {
  components: { TheHomeNav },
};
</script>

<style scoped>
footer {
  position: relative;
  height: 5vh;
  background-color: black;
}
ul {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}
ul li {
  margin-right: 15px;
}
i {
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.wedesign_restrant_menu {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-right: 10px;
  font-family: "Noto Serif JP", serif;
}
</style>
