<template>
  <div class="home">
    <div class="card">
      <div class="cardwrap" v-for="(store, index) in storeData" :key="index">
        <img alt="Vue logo" :src="store.image" class="thumbnailsImage" />
        <div class="sotreName_Location_detailButton">
          <p class="storeName">{{ store.name }}</p>
          <p class="storeLocation_category">
            {{ store.location }} / {{ store.category }}
          </p>
          <div class="button_icon">
            <button class="detailBUtton">詳しく見る</button>
            <i class="fas fa-heart fa-2x heartIcon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../public/common";
export default {
  data() {
    return {
      storeData: common.store,
    };
  },

  created() {
    console.log(this.storeData);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cardwrap {
  width: 20%;
  margin-right: 15px;
  border: 1px solid black;
}
.thumbnailsImage {
  height: 150px;
  width: 100%;
  display: block;
}
.sotreName_Location_detailButton {
  text-align: left;
  margin-left: 15px;
  margin-bottom: 15px;
}
.storeName {
  font-size: 16px;
  font-weight: 600;
}
.detailBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 100px;
}
.button_icon {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 95%;
}
</style>
