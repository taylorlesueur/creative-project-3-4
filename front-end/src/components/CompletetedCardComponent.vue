<template>
<div class="wrapper">
  <div class="cards">
    <div class="card" v-for="card in filterCompleteCards" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <p>{{card.description}}</p>
      </div>
      <div class="buttons">
        <button class="auto link" @click="followLink(card)">Go To</button>
        <button class="auto" @click="removeCard(card)">Add To-do</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cardList: Array
  },
    methods: {
        removeCard(card) {
            card.completed = false;
        },
        followLink(card) {
            window.open(card.url, '_blank');
        },
    },
    computed: {
        filterCompleteCards: function() {
            return this.cardList.filter(card => card.completed == true);
        }
    }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
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
    background: #70B7BA;
}

.auto {
  margin-left: auto;
}
</style>