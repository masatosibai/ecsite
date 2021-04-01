<template>
  <nav>
    <ul>
      <li v-show="!$store.state.auth">
        <router-link :to="{ name: 'register' }">新規登録</router-link>
      </li>
      <li v-show="$store.state.role === 1">
        <router-link :to="{ name: 'admin' }">管理者画面</router-link>
      </li>
      <li v-show="$store.state.role === 2">
        <router-link :to="{ name: 'admin' }">店舗管理者画面</router-link>
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
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          alert("ログアウトしました。");
          this.$store.dispatch("logout");
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
      // this.$store.dispatch("logout");
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
