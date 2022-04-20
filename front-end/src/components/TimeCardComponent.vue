<template>
<div class="wrapper">
  <div class="cards">
    <div class="card" v-for="card in cardList" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <p>{{card.description}}</p>
      </div>
      <div class="buttons">
        <button class="auto link" @click="clockIn(card)">Clock In</button>
        <button class="auto" @click="clockOut(card)">Clock Out</button>
      </div>
      <div class="time">
        <p>{{card.time}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardList',
  props: {
    cardList: Array
  },
  data() {
    return {
      punches: [],
    }
  },
  created() {
    this.getPunches();
  },
  methods: {
    clockIn(card) {
        console.log("Clocking In: ", card.name);
        card.clockedin = true;
        this.clockInDatabase(card);
    },
    async clockInDatabase(card) {
      console.log("Database clockin");
      try {
        const curTimestamp = Date.now();
        await axios.post('/api/clockin', {
          name: card.name,
          description: card.description,
          timestampIn: curTimestamp
        });
      } catch (error) {
        console.log(error);
      }
    },
    async clockOutDatabase(punch) {
      console.log("Database clockout: ", punch.timestampIn);
      try {
        const curTimestamp = Date.now();
        await axios.put("/api/punches/" + punch.timestampIn, {
          timestampOut: curTimestamp
        });
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    clockOut(card) {
        console.log("Clocking out: ", card.name);
        card.clockedin = false;
        const titleArray = this.punches.filter(punch => punch.name == card.name);
        const punch = titleArray[titleArray.length -1];
        console.log("punch name: ", punch);
        this.clockOutDatabase(punch);
    },
    async getPunches() {
      try {
        let response = await axios.get("/api/punches");
        this.punches = response.data;
        console.log(this.punches);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-self: center;
  justify-content: center;
}

.cards {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.info {
  background: #3D4C53;
  color: white;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.buttons {
  display: flex;
}

button {
  height: 50px;
  width: 100px;
  background: #F1433F;
  color: white;
  border: none;
}

.link {
    background: #A9CF54;
}

.auto {
  margin-left: auto;
}

.time {
  height: 50px;
  background: #70B7BA;
  color: white;
  border: none;
}

.time p {
  padding-top: 12px;
}
</style>