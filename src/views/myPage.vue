<template>
  <div id="myPage">
    <div id="userName">
      <h2>{{ user_info.name }}様</h2>
    </div>
    <div id="cards">
      <div class="cardswarap">
        <h2 class="h2title">お気に入り店舗</h2>
        <div class="cardwrap">
          <div
            class="card"
            v-for="(shops, shopsIndex) in user_likes"
            :key="shopsIndex"
          >
            <img
              alt="ショップ画像"
              :src="shops.image_url"
              class="thumbnailsImage"
            />
            <div class="sotreName_Location_detailButton">
              <p class="storeName">{{ shops.name }}</p>
              <p class="storeLocation_category">
                {{ shops.area }} / {{ shops.genre }}
              </p>
              <div class="button_icon">
                <button
                  class="detailBUtton"
                  @click="deletFavoritedStore(shops.id)"
                >
                  削除
                </button>
                <i class="fas fa-heart fa-2x heartIcon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="h2title">予約状況</h2>
    <div id="reservations">
      <div
        id="reservationsCards"
        v-for="(reservation, reservationIndex) in user_reserve"
        :key="reservationIndex"
      >
        <div id="reservationsCardWrap">
          <div id="reservationsCardTitle">
            <i id="reservationclock" class="far fa-clock"></i>
            <p>予約{{ reservationIndex + 1 }}</p>
            <i
              id="reservationDelete"
              class="fas fa-times"
              @click="deleteReservation(reservation.resrve_info.id)"
            ></i>
          </div>
          <div id="reservationsCard">
            <div class="reservationsCardWrap">
              <div class="reservationTitle">
                <p>Shop</p>
              </div>
              <div class="reservationContent">
                <p>{{ reservation.name }}</p>
              </div>
            </div>
            <div class="reservationsCardWrap">
              <div class="reservationTitle">
                <p>Date</p>
              </div>
              <div class="reservationContent">
                <p>{{ reservation.resrve_info.date }}</p>
              </div>
            </div>
            <div class="reservationsCardWrap">
              <div class="reservationTitle">
                <p>Time</p>
              </div>
              <div class="reservationContent">
                <p>{{ reservation.resrve_info.time }}</p>
              </div>
            </div>
            <div class="reservationsCardWrap">
              <div class="reservationTitle">
                <p>Number</p>
              </div>
              <div class="reservationContent">
                <p>{{ reservation.resrve_info.user_num }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
export default {
  props: ["id"],
  data() {
    return {
      user_id: this.id,
      user_info: [],
      user_likes: [],
      user_reserve: [],
    };
  },

  async created() {
    firebase.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const idToken = await currentUser.getIdToken(true);
        const data = await axios.get(
          process.env.VUE_APP_API_PRODUCTION + "/users/" + this.user_id,
          {
            headers: {
              Authorization: idToken,
            },
          }
        );
        // console.log(data);
        this.user_info = data.data;
        this.user_likes = data.data.likes;
        this.user_reserve = data.data.reservations;
      }
    });
  },
  methods: {
    deleteReservation(selectedID) {
      axios
        .delete(
          process.env.VUE_APP_API_PRODUCTION + "/reservation/" + selectedID
        )
        .then(() => {
          // console.log(response);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        })
        .catch(() => {
          // console.log("err:", err);
        });
    },
    deletFavoritedStore(shopID) {
      axios({
        method: "delete",
        url: process.env.VUE_APP_API_PRODUCTION + "/likes",
        data: {
          userID: this.user_id,
          shopID: shopID,
        },
      }).then(() => {
        // console.log(response);
        this.$router.go({
          path: this.$router.currentRoute.path,
          force: true,
        });
      });
    },
  },
};
</script>

<style scoped>
#userName {
  margin-top: 3%;
  margin-bottom: 5%;
  font-size: 30px;
}
.h2title {
  font-size: 18px;
  margin-bottom: 1%;
}

#cards {
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 5%;
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
  background-color: white;
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
.button_icon {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 95%;
}
#reservations {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#reservationsCards {
  display: flex;
  justify-content: center;
  width: 25%;
  margin-right: 1%;
  margin-bottom: 1.5%;
}
#reservationsCardWrap {
  text-align: left;
  background-color: blue;
  color: white;
  width: 100%;
}
#reservationsCardTitle {
  display: flex;
  position: relative;
  margin-top: 3%;
  margin-bottom: 3%;
}
#reservationclock {
  margin-left: 3%;
  margin-right: 10%;
}
#reservationDelete {
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 3%;
}
.reservationsCardWrap {
  display: flex;
  margin-bottom: 3%;
}
.reservationTitle {
  margin-right: 5%;
  margin-left: 3%;
}
</style>
