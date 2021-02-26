<template>
  <div class="register">
    <div class="registerwrap">
      <div class="title">
        会員登録ありがとうございます。
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
  text-align: center;
  border: 1px solid black;
}
.title {
  padding: 15px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
}

.resisterBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 50px;
}
</style>
