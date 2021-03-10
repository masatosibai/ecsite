<template>
  <dir id="summarycontainer">
    <div id="summary">
      <div>
        <img src="../../static/img2.png" alt="" />
        <img src="../../static/line.png" alt="" />
      </div>
    </div>
    <div>
      <p class="sans-serif">
        私たちは仕事終わりの最高の一杯を提供します。<br />
        最高の一杯とおいしい食事で一日の疲れを癒します。
      </p>
    </div>
  </dir>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  display: block;
}
#summarycontainer {
  margin-bottom: 100px;
}
#summary {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.sans-serif {
  font-family: "Helvetica Neue", "Segoe UI", "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  font-size: 30px;
}
</style>
