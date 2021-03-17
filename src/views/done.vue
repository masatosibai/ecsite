<template>
  <div class="done">
    <div class="donewrap">
      <div class="title">
        ご予約ありがとうございます。
      </div>
      <div class="buttonField">
        <button class="doneBUtton">戻る</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.done {
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
.donewrap {
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

.doneBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 30%;
}
</style>
