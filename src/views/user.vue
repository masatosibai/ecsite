<template>
<div id>
<table border="3" width="100%">
<tbody>
  <tr>
  <th>名前</th>
  <td>{{user_info.name}}</td>
  </tr>
    <tr>
  <th>Email</th>
  <td>{{user_info.email}}</td>
  </tr>
</tbody>
</table>
<div id="favaritedShop" v-for="(shops,index) in user_likes" :key="index" >
<div id="shopImage">
  <img :src="shops.image_url" alt="">
</div>
<div id="shopInfo">
  <p>{{shops.description}}</p>
</div>
</div>
<table v-for="(reservations,index) in user_reserve" :key="index" border="3" width="100%">
<tbody>
  <tr>
  <th>予約名前</th>
  <td>{{user_info.name}}</td>
  </tr>
    <tr>
  <th>予約店舗名</th>
  <td>{{reservations.shops.name}}</td>
  </tr>
      <tr>
  <th>予約人数</th>
  <td>{{reservations.user_num}}</td>
  </tr>
  <tr>
    <th>予約日</th>
  <td>{{reservations.date}}</td>
  </tr>
</tbody>
</table>

</div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
    data() {
    return {
      user_id : this.id,
      user_info :[],
      user_likes:[],
      user_reserve:[],
    };
  },

    async created() {
      console.log(this.id);
    const data =  await axios.get("http://127.0.0.1:8000/api/users/"+this.user_id);
    this.user_info = data.data[0];
    this.user_likes =data.data[0].shops;
    this.user_reserve =data.data[1]
    console.log(this.user_info);
    console.log(this.user_likes);
    console.log(this.user_reserve);
    
  },
};
</script>

<style scoped>
#favaritedShop{
  display: flex;
  width: 100%;
}
#shopImage{
  width: 15%;
}
#shopImage img{
  width: 100%;
}

#shopInfo{
  width: 80%;
}
table{
  width: 100%;
  margin-bottom: 30px;
  border-collapse: separate;
  border-spacing: 0px 8px;
}
tr{
  margin-bottom: 50px;
}
</style>