<template>
  <div id="cards">
    <div class="cardswarap">
      <div class="cardwrap">
        <div class="card" v-for="(store, index) in storeData" :key="index">
          <img alt="Vue logo" :src="store.image_url" class="thumbnailsImage" />
          <div class="sotreName_Location_detailButton">
            <p class="storeName">{{ store.name }}</p>
            <p class="storeLocation_category">
              {{ store.area }} / {{ store.genre }}
            </p>
            <div class="button_icon">
              <button class="detailBUtton">詳しく見る</button>
              <i class="fas fa-heart fa-2x heartIcon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      favoritedShops: [],
      visible: false,
    };
  },
  async created() {
    const data = await axios.get("http://127.0.0.1:8000/api/shops");
    // console.log(data.data);
    this.storeData = data.data;
  },
};
</script>
