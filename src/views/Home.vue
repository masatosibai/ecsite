<template>
  <div class="home">
    <the-home-header />
    <the-home-summary />
    <div id="storeName_searchBox">
      <div id="storeName_searchBoxWrap">
        <img src="../../static/stores.png" alt="" />
        <div id="searchBoxs">
          <p>エリア:</p>
          <select v-model="selectedArea">
            <option selected>ALL Area</option>
            <option v-for="n in storeArea" :key="n">{{ n }}</option>
          </select>
          <p>ジャンル:</p>
          <select v-model="selectedGenre">
            <option selected>ALL Genre</option>
            <option v-for="m in storeGenre" :key="m">{{ m }}</option>
          </select>
          <input
            type="text"
            placeholder="自由検索ワード"
            v-model="selectedFreeWord"
          />
          <button @click="searchClick()">
            検索
          </button>
        </div>
      </div>
    </div>
    <!-- <transition name="fade"> -->
    <div v-show="visible">
      <div id="cards">
        <div class="cardswarap">
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
                  <button class="detailBUtton">
                    <router-link
                      v-bind:to="{ name: 'shops', params: { id: store.id } }"
                      >詳しく見る</router-link
                    >
                  </button>
                  <i
                    class="fas fa-heart fa-2x heartIcon"
                    @click="favoriteStore(store.id)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <the-home-footer />
  </div>
</template>

<script>
// import common from "../../public/common";
import TheHomeFooter from "../components/TheHomeFooter.vue";
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheHomeSummary from "../components/TheHomeSummary.vue";
import axios from "axios";
export default {
  components: { TheHomeHeader, TheHomeSummary, TheHomeFooter },
  data() {
    return {
      defaltStoreDate: [],
      storeData: [],
      storeArea: [],
      storeGenre: [],
      selectedArea: "ALL Area",
      selectedGenre: "ALL Genre",
      selectedFreeWord: "",
      visible: false,
    };
  },

  async created() {
    const data = await axios.get(
      process.env.VUE_APP_API_DEVELOP_production + "/shops"
    );
    const area = [];
    const genre = [];
    for (const store of data.data) {
      area.push(store.area);
      genre.push(store.genre);
    }
    this.storeData = data.data;
    this.defaltStoreDate = data.data;
    this.storeArea = Array.from(new Set(area));
    this.storeGenre = Array.from(new Set(genre));
    // console.log(this.selectedArea);
    // console.log(this.selectedGenre);
    // console.log(process.env.VUE_APP_API_DEVELOP_production);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const top = this.$el.getBoundingClientRect().top * -1;
      // console.log(top);
      if (!this.visible) {
        // console.log("from here");
        if (top > 0) {
          this.visible = true;
        }
      }
      if (this.visible) {
        if (top === 0) {
          this.visible = false;
          // console.log("no visible");
        }
      }
    },
    searchClick() {
      let filteredArea = this.defaltStoreDate;
      if (this.selectedArea !== "ALL Area") {
        filteredArea = this.defaltStoreDate.filter(
          ({ area }) => area === this.selectedArea
        );
      }
      let filteredGenre = filteredArea;
      if (this.selectedGenre != "ALL Genre") {
        filteredGenre = filteredArea.filter(
          ({ genre }) => genre === this.selectedGenre
        );
      }
      let filterdFreeWord = filteredGenre;
      if (this.selectedFreeWord != "") {
        filterdFreeWord = filterdFreeWord.filter(({ description }) =>
          description.includes(this.selectedFreeWord)
        );
      }
      this.storeData = filterdFreeWord;
      this.selectedArea = "ALL Area";
      this.selectedGenre = "ALL Genre";
      this.selectedFreeWord = "";
    },
    favoriteStore(storeID) {
      if (this.$store.state.auth) {
        axios
          .post(process.env.VUE_APP_API_DEVELOP_production + "/likes", {
            userID: this.$store.state.userID,
            shopID: storeID,
          })
          .then(() => {
            // console.log(response);
          });
      } else {
        alert("ログインしてください");
      }
    },
  },
};
</script>

<style scoped>
#storeName_searchBox {
  display: flex;
  justify-content: center;
}
#storeName_searchBoxWrap {
  position: relative;
  height: 50px;
  width: 75%;
}
#storeName_searchBox img {
  position: absolute;
  left: 0;
}
#searchBoxs {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 25px;
  display: flex;
}
#searchBoxs p {
  font-size: 23px;
}
/* 
#storeName_searchBox select {
  width: 20%;
} */
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
.detailBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 100px;
}
.detailBUtton a {
  color: white;
  text-decoration: none;
}
.button_icon {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 95%;
}
i {
  cursor: pointer;
}
.fade-enter-active {
  animation: slow_show 3s;
}
.fade-leave-active {
  animation: slow_show 1.5s reverse;
}

@keyframes slow_show {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
