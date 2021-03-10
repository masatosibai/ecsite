<template>
  <div class="home">
    <the-home-header />
    <the-home-summary />
    <img src="../../static/stores.png" alt="" />
    <transition name="fade">
      <div v-show="visible">
        <div id="cards">
          <div class="cardswarap">
            <div class="cardwrap">
              <div
                class="card"
                v-for="(store, index) in storeData"
                :key="index"
              >
                <img
                  alt="Vue logo"
                  :src="store.image"
                  class="thumbnailsImage"
                />
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
        </div>
      </div>
    </transition>
    <the-home-footer />
  </div>
</template>

<script>
import common from "../../public/common";
import TheHomeFooter from "../components/TheHomeFooter.vue";
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheHomeSummary from "../components/TheHomeSummary.vue";
export default {
  components: { TheHomeHeader, TheHomeSummary, TheHomeFooter },
  data() {
    return {
      storeData: common.store,
      visible: false,
    };
  },

  created() {
    console.log(this.storeData);
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
      console.log(top);
      if (!this.visible) {
        console.log("from here");
        if (top > 0) {
          this.visible = true;
        }
      }
      if (this.visible) {
        if (top === 0) {
          this.visible = false;
          console.log("no visible");
        }
      }
    },
  },
};
</script>

<style scoped>
#cards {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 100px;
}
.cardswarap {
  width: 70%;
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
