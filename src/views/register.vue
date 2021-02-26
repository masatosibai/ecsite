<template>
  <div class="register">
    <div class="registerwrap">
      <div class="title">
        会員登録
      </div>
      <div class="nameField">
        <i class="fas fa-user-alt"></i
        ><input type="text" placeholder="お名前" />
      </div>
      <div class="emailField">
        <i class="fas fa-envelope"></i
        ><input type="email" placeholder="メール" />
      </div>
      <div class="pinField">
        <i class="fas fa-lock"></i><input type="password" placeholder="暗号" />
      </div>
      <div class="buttonField">
        <button class="resisterBUtton">登録</button>
      </div>
    </div>
  </div>
</template>

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
  margin-bottom: 15px;
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
  width: 50px;
}
</style>
