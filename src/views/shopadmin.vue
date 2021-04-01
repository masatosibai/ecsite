<template>
  <div id="cards">
    <div class="cardswarap">
      <h1>店舗情報管理画面</h1>
      <button class="creteBUtton">
        新規登録する
      </button>
      <div class="cardwrap">
        <div class="card" v-for="(store, index) in storeData" :key="index">
          <img alt="Vue logo" :src="store.image_url" class="thumbnailsImage" />
          <div class="sotreName_Location_detailButton">
            <p class="storeName">{{ store.name }}</p>
            <p class="storeLocation_category">
              {{ store.area }} / {{ store.genre }}
            </p>
            <div class="button_icon">
              <button class="updateBUtton">
                <router-link
                  v-bind:to="{ name: 'shops', params: { id: store.id } }"
                  >登録内容を変更する</router-link
                >
              </button>
            </div>
            <div class="button_icon">
              <button class="deleteBUtton">
                <router-link
                  v-bind:to="{ name: 'shops', params: { id: store.id } }"
                  >登録内容を削除する</router-link
                >
              </button>
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
      storeData: [],
    };
  },
  async created() {
    const data = await axios.get(process.env.VUE_APP_API_ORIGIN + "/shops");
    this.storeData = data.data;
    // console.log(this.selectedArea);
    // console.log(this.selectedGenre);
    // console.log(process.env.VUE_APP_API_ORIGIN);
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  margin-top: 10px;
}
#cards {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 100px;
}
.cardswarap {
  width: 90%;
}
.cardwrap {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.card {
  width: 20%;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid black;
}
.thumbnailsImage {
  height: 150px;
  width: 100%;
  display: block;
}
.sotreName_Location_detailButton {
  text-align: left;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
}
.storeName {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}
.storeLocation_category {
  margin-bottom: 5px;
}
.updateBUtton,
.deleteBUtton {
  background-color: blue;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
  color: white;
  width: 100%;
}
.creteBUtton {
  background-color: blue;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
  color: white;
  width: 10%;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
}
.updateBUtton a,
.deleteBUtton a,
.creteBUtton a {
  color: white;
  text-decoration: none;
}
.button_icon {
  display: flex;
  align-content: center;
  width: 95%;
}
</style>
