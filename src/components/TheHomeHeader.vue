<template>
  <div class="video_container">
    <video class="videofield" src="../../static/Beer.mp4" loop autoplay>
      <p>動画が再生さません</p>
    </video>
    <div id="restrant_eye_catch">
      <img src="../../static/img.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video_container {
  position: relative;
  height: auto;
  margin-bottom: 100px;
}
.videofield {
  width: 100%;
  z-index: 1;
}
#restrant_eye_catch {
  position: absolute;
  top: 30px;
  left: 250px;
  z-index: 2;
  height: 500px;
  transform: rotate(-30deg);
}
#restrant_eye_catch img {
  height: 30vw;
}
</style>
