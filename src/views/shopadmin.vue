<template>
  <div id="cards">
    <div class="cardswarap">
      <h1>店舗情報管理画面</h1>
      <button class="creteBUtton">
        <router-link to="/registerShop"> 新規登録する</router-link>
      </button>
      <div class="cardwrap">
        <div class="card" v-for="(store, index) in storeData" :key="index">
          <img
            alt="ショップ画像"
            :src="store.image_url"
            class="thumbnailsImage"
          />
          <div class="sotreName_Location_detailButton">
            <p class="storeName">{{ store.name }}</p>
            <p class="storeLocation_category">
              {{ store.area }} / {{ store.genre }}
            </p>
            <div class="button_icon">
              <button class="updateBUtton">
                <router-link
                  v-bind:to="{ name: 'updateShop', params: { id: store.id } }"
                  >予約と店舗情報を変更する</router-link
                >
              </button>
            </div>
            <div class="button_icon">
              <button class="deleteBUtton" @click="deleteShopInfo(store.id)">
                店舗情報を削除する
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
    await axios
      .get(process.env.VUE_APP_API_ORIGIN + "/shopadmin/shops", {
        headers: {
          Authorization: this.$store.state.role,
        },
      })
      .then((res) => {
        this.storeData = res.data;
      })
      .catch((e) => {
        alert(e.response.data["msg"]);
        this.$router.push("/");
      });
  },
  methods: {
    async deleteShopInfo(shopID) {
      await axios
        .delete(
          process.env.VUE_APP_API_ORIGIN + "/shopadmin/delete/shop"+shopID,
          {
            headers: {
              Authorization: this.$store.state.role,
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert(res.data["msg"]);
        })
        .catch((e) => {
          alert(e.response.data["msg"]);
        });
      this.$router.push("/");
    },
  },
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
  cursor: pointer;
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
