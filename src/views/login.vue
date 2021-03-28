<template>
  <div class="login">
    <div class="loginwrap">
      <div class="title">
        login
      </div>
      <div class="emailField">
        <i class="fas fa-envelope"></i
        ><input type="email" placeholder="メール" v-model="email" />
      </div>
      <div class="pinField">
        <i class="fas fa-lock"></i>
        <form>
          <input type="password" placeholder="暗号" v-model="password" />
        </form>
      </div>
      <div class="buttonField">
        <button class="resisterBUtton" @click="login">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("ログイン成功");
            const JWT = firebase.auth().currentUser.getIdToken(true);
            // console.log(firebase.auth().currentUser.email);
            // console.log(JWT);
            this.$store.dispatch("login", {
              idtoken: JWT,
            });
            this.$router.push("/");
          },
          (err) => {
            alert(err.message);
          }
        );
    },

    // login() {
    //   this.$store.dispatch("login", {
    //     email: this.email,
    //     password: this.password,
    //   });
    // },
  },
};
</script>

<style scoped>
.login {
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
.loginwrap {
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
.loginBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 20%;
}
</style>
