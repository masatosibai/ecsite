<template>
  <div class="thanks">
    <div class="thankswrap">
      <div class="title">
        会員登録ありがとうございます。
      </div>
      <div class="buttonField">
        <button class="thanksBUtton" @click="loginclik">
          <router-link :to="{ name: 'login' }">ログインする</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.thanks {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid black;
}
.thankswrap {
  width: 25%;
  height: 230px;
  text-align: center;
  border: 1px solid black;
}
.title {
  padding: 15px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
}

.thanksBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 30%;
}
.thanksBUtton a {
  color: white;
  text-decoration: none;
}
</style>
