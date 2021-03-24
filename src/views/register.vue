<template>
  <div class="register">
    <div class="registerwrap">
      <div class="title">
        会員登録
      </div>
      <div class="nameField">
        <i class="fas fa-user-alt"></i
        ><input type="text" placeholder="お名前" v-model="name" />
      </div>
      <div class="emailField">
        <i class="fas fa-envelope"></i
        ><input type="email" placeholder="メール" v-model="email" />
      </div>
      <div class="pinField">
        <i class="fas fa-lock"></i
        ><input type="password" placeholder="暗号" v-model="password" />
      </div>
      <div class="buttonField">
        <button class="resisterBUtton" @click="register">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      axios
        .post(process.env.VUE_APP_URL + "/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.replace("/thanks");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
.register {
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
.registerwrap {
  width: 25%;
  height: 230px;
  border: 1px solid black;
}
.title {
  text-align: left;
  padding: 15px;
  background-color: blue;
  color: white;
  margin-bottom: 45px;
}
.nameField,
.emailField,
.pinField {
  margin-bottom: 15px;
}
i {
  margin-right: 10px;
}
.buttonField {
  text-align: right;
  margin-right: 15px;
}
input {
  border-top: none;
  border-left: none;
  border-right: none;
}
.resisterBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 20%;
}
</style>
