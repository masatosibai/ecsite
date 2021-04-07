<template>
  <div>
    <h1>ショップ情報と予約状況</h1>
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
    <div class="update">
      <div class="updatewrap">
        <div class="title">
          ショップ情報登録
        </div>
        <div class="nameField">
          <!-- <i class="fas fa-user-alt"></i> -->
          <input type="text" placeholder="ショップ名" v-model="name" />
        </div>
        <div class="areaField">
          <!-- <i class="fas fa-envelope"></i> -->
          <input type="text" placeholder="エリア" v-model="area" />
        </div>
        <div class="genreField">
          <!-- <i class="fas fa-lock"></i> -->
          <input type="text" placeholder="ジャンル" v-model="genre" />
        </div>
        <div class="descriptionField">
          <!-- <i class="fas fa-lock"></i> -->
          <textarea type="text" placeholder="概要" v-model="description" />
        </div>
        <div class="imageUrlField">
          <!-- <i class="fas fa-lock"></i> -->
          <input type="text" placeholder="イメージURL" v-model="imageUrl" />
        </div>
        <div class="buttonField">
          <button class="updateBUtton" @click="update">変更</button>
        </div>
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
      user_reserve: [],
      name: "",
      area: "",
      genre: "",
      description: "",
      imageUrl: "",
    };
  },

  async created() {
    await axios
      .get(process.env.VUE_APP_API_PRODUCTION + "/shopadmin/shops/" + this.id, {
        headers: {
          Authorization: this.$store.state.role,
        },
      })
      .then((res) => {
        this.user_reserve = res.data.reservations;
        this.name = res.data.name;
        this.area = res.data.area;
        this.genre = res.data.genre;
        this.description = res.data.description;
        this.imageUrl = res.data.image_url;
      })
      .catch((e) => {
        alert(e.response.data["msg"]);
        this.$router.push("/");
      });
  },
  methods: {
    async update() {
      await axios
        .put(
          process.env.VUE_APP_API_PRODUCTION + "/shopadmin/update/shop",
          {
            id: this.id,
            name: this.name,
            area: this.area,
            genre: this.genre,
            description: this.description,
            imageUrl: this.imageUrl,
          },
          {
            headers: {
              Authorization: this.$store.state.role,
            },
          }
        )
        .then((res) => {
          alert(res.date.msg);
        })
        .catch((e) => {
          alert(e.response.data["msg"]);
          this.$router.push("/");
        });
    },
    async deleteReservation(selectedID) {
      await axios
        .delete(
          process.env.VUE_APP_API_PRODUCTION +
            "/shopadmin/delete/reservation/" +
            selectedID,
          {
            headers: {
              Authorization: this.$store.state.role,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          alert(res.date.msg);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        })
        .catch((e) => {
          alert(e.response.data["msg"]);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  margin-top: 5%;
  margin-bottom: 3%;
  display: block;
}
#reservations {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3%;
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
.update {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}
.updatewrap {
  width: 80%;
  border: 1px solid black;
}
.title {
  text-align: left;
  padding: 15px;
  background-color: blue;
  color: white;
  margin-bottom: 45px;
}
.nameField,
.areaField,
.genreField,
.descriptionField,
.imageUrlField {
  margin-bottom: 15px;
}
i {
  margin-right: 10px;
}
.buttonField {
  text-align: right;
  margin-right: 15px;
}
input,
textarea {
  border-top: none;
  border-left: none;
  border-right: none;
  width: 70%;
}
.updateBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 20%;
  margin-bottom: 15px;
}
</style>
