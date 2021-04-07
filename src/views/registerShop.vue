<template>
  <div class="register">
    <div class="registerwrap">
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
        <input type="text" placeholder="概要" v-model="description" />
      </div>
      <div class="imageUrlField">
        <!-- <i class="fas fa-lock"></i> -->
        <input type="text" placeholder="イメージURL" v-model="imageUrl" />
      </div>
      <div class="buttonField">
        <button class="resisterBUtton" @click="register">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      area: "",
      genre: "",
      description: "",
      imageUrl: "",
    };
  },

  methods: {
    async register() {
      axios
        .post(
          process.env.VUE_APP_API_DEVELOP + "/shopadmin/register/shop",
          {
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
        .then(() => {
          this.$router.replace("/shopadmin");
        })
        .catch((e) => {
          alert(e.response.data["msg"]);
        });
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid black;
}
.registerwrap {
  width: 25%;
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
input {
  border-top: none;
  border-left: none;
  border-right: none;
}
.resisterBUtton {
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  width: 20%;
  margin-bottom: 15px;
}
</style>
