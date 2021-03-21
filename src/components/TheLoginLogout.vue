<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'register' }">新規登録</router-link>
      </li>
      <li v-show="!$store.state.auth">
        <router-link :to="{ name: 'login' }">ログイン</router-link>
      </li>
      <li v-show="$store.state.auth">
        <p @click="logout">ログアウト</p>
      </li>
      <li v-show="$store.state.auth">
        <router-link
          :to="{ name: 'myPage', params: { id: $store.state.userID } }"
          >マイページ</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
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
