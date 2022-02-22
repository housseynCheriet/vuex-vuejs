<template>
  <div>
    <button @click="addNewCar">New car</button>
    <div style="margin-top: 10px;">
      <div class="element" v-for="(car,i) in cars" :class="car.color">
        <input :placeholder="car.name" v-model="car.name">
         <div class="select-dropdown">
          <select @change="changeDoors($event)" :id="i">
            <option value="2">2 doors</option>
            <option value="3">3 doors</option>
            <option value="4">4 doors</option>
            <option value="5">5 doors</option>
          </select>
         </div>
        <button @click="changeColor($event)" :id="i">Change color</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  
  computed: {
    cars(){
      return this.$store.state.cars
    },
    colors(){
      return this.$store.state.colors
    }
  },
  methods: {
    addNewCar: function(){
      this.$store.commit('newCar');
    },

    changeColor: function(e){
      this.$store.commit('changeColor',e.target.id);
    },

    changeDoors: function(e){
      this.$store.commit('changeDoors',e.target.id,e.target.value);
    }
  }
}
</script>

<style>
.element {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 200px;
  margin: 1px;
  text-align: center;
  
}
.element input{
  display: inline-block;
  position: relative;
  width: -webkit-fill-available;
  height: 24px;
  text-align: center;
}
.element button{
  top: 50%;
    position: relative;
    font-size: 20px;
    background: bisque;
}
.blue {
  background: blue;
  
}
.red {
  background: red;
  
}
.green {
  background: green;
  
}
.black {
  background: black;
  
}
/****** select ***********/

.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
    background-color: #E6E6E6;
    border-radius: 4px;
    width: 80%;
    text-align: center;
    display: inline-block;
    top:  10%;
}
.select-dropdown select {
  font-size: 1rem;
  font-weight: normal;
  width: 100%;
  text-align: center;
  padding: 3px;
  border: none;
  background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
  appearance: none;
}
.select-dropdown select:active, .select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #aaa;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>
