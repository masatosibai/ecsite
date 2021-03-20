<template>
  <nav id="login_logout_menu">
    <ul>
      <li>
        <router-link :to="{ name: 'register' }">新規登録</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'login' }">ログイン</router-link>
      </li>
      <li>
        <a href="#cards">
          ログアウト
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#login_logout_menu {
  color: white;
  font-family: "Noto Serif JP", serif;
  font-size: 18px;
}
a {
  text-decoration: none;
  color: white;
  display: block;
}

ul {
  display: flex;
  list-style: none;
  margin-left: 0;
  padding: 0;
}
li {
  text-align: left;
  margin-left: 20px;
  cursor: pointer;
}
</style>
