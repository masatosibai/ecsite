<template>
  <div id="shopInfo">
    <div id="shopInfoWrap">
      <div id="shopTitle">
        <i class="fas fa-chevron-left"></i>
        <h2>{{ shop_info.name }}</h2>
      </div>
      <img :src="shop_info.image_url" alt="" />
      <div id="area_genre">
        <p>{{ shop_info.area }}/{{ shop_info.genre }}</p>
      </div>
      <p id="shop_descripton">
        {{ shop_info.description }}
      </p>
    </div>
    <div id="reservationFrom">
      <h1>予約</h1>
      <div id="calender">
        <v-date-picker v-model="date"></v-date-picker>
      </div>
      <select v-model="reserveTime">
        <option disabled value="">予約時間</option>
        <option v-for="n in 13" :key="n">{{ n + 8 }}:00</option>
      </select>
      <select v-model="reserveNum">
        <option disabled value="">予約人数</option>
        <option v-for="m in 30" :key="m">{{ m }}</option>
      </select>
      <div id="reservedInfo">
        <div class="reservationsCardWrap">
          <div id="reservationTitleWrap">
            <div class="reservationTitle">
              <p>SHOP</p>
            </div>
            <div class="reservationTitle">
              <p>Date</p>
            </div>
            <div class="reservationTitle">
              <p>Time</p>
            </div>
            <div class="reservationTitle">
              <p>Number</p>
            </div>
          </div>
          <div>
            <div class="reservationContent">
              <p>{{ shop_info.name }}</p>
            </div>
            <div class="reservationContent">
              <p>{{ reserveDate }}</p>
            </div>
            <div class="reservationContent">
              <p>{{ reserveTime }}</p>
            </div>
            <div class="reservationContent">
              <p>{{ reserveNum }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="reserveButton" @click="reserveButton">
        予約する
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      shop_id: this.id,
      shop_info: [],
      date: new Date(),
      reserveDate: "",
      reserveTime: "",
      reserveNum: "",
    };
  },
  watch: {
    date: function(newVal) {
      this.reserveDate = this.formatDate(newVal);
    },
    reserveTime: function(newVal) {
      this.reserveTime = newVal;
    },
  },

  async created() {
    const data = await axios.get(
      process.env.VUE_APP_API_DEVELOP + "/shops/" + this.shop_id
    );
    this.shop_info = data.data;
    let today = new Date();
    this.reserveDate = this.formatDate(today);
  },
  methods: {
    formatDate(today) {
      return (
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate()
      );
    },
    async reserveButton() {
      if (this.$store.state.auth) {
        await axios
          .post(process.env.VUE_APP_API_DEVELOP + "/reservation", {
            user_id: this.$store.state.userID,
            shop_id: this.shop_id,
            date: this.reserveDate,
            time: this.reserveTime,
            user_num: this.reserveNum,
          })
          .then((response) => {
            console.log(response);
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      } else {
        alert("ログインしてください");
      }
    },
  },
};
</script>

<style scoped>
#shopInfo {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
#shopInfoWrap {
  text-align: left;
  width: 40%;
  margin-right: 5%;
}
#shopTitle {
  display: flex;
  position: relative;
  font-size: 16px;
  margin-bottom: 3%;
}
#shopTitle h2 {
  font-size: 18px;
}
i {
  margin-right: 3%;
  cursor: pointer;
}
#shopInfoWrap img {
  width: 100%;
}
#area_genre {
  margin-top: 2%;
  margin-bottom: 2%;
}
#shop_descripton {
  margin-bottom: 5%;
}
#calender {
  margin-bottom: 2%;
}
select {
  width: 80%;
  margin-bottom: 2%;
}
#reservationFrom {
  text-align: left;
  background-color: blue;
  color: white;
  width: 35%;
  padding: 2%;
}
#reservationFrom h1 {
  font-size: 18px;
  margin-bottom: 3%;
}
#reservedInfo {
  background-color: cornflowerblue;
  width: 60%;
}
.reservationsCardWrap {
  display: flex;
  color: white;
  width: 100%;
  padding: 1%;
}
.reservationTitle,
.reservationContent {
  margin-bottom: 10px;
}
#reservationTitleWrap {
  margin-right: 4%;
}
#reserveButton {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: darkblue;
  margin-top: 5%;
  height: 30px;
  width: 100%;
  cursor: pointer;
}
</style>
