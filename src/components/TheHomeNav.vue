<template>
  <nav id="menu">
    <ul>
      <li>
        <a href="#summary">
          最高の一杯
        </a>
      </li>
      <li>
        <a href="#cards">
          店舗一覧
        </a>
      </li>
      <li>
        <a href="/">
          お問い合わせ
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
#menu {
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
