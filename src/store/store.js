import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    cars: [],
    doors: [2,3,4,5],
    colors: ['green','blue','red','black'],
    maxColor:4
  },
  getters:{
    
    cars(state)  {
        return state.cars;
     
    }
  },
  mutations: {
    newCar(state) {
      
            state.cars.push({name: "New car", color: 'green', colorIndex:0, doors: 2});
    }, 

    changeColor(state,carId) {
            var car=state.cars[carId];
            if(car.colorIndex==state.maxColor-1)
            car.colorIndex=0;
            else
            car.colorIndex++;

            car.color=state.colors[car.colorIndex];
            
   },

   changeDoors(state,carId,countDoor) {
            var car=state.cars[carId];
            car.doors=countDoor;
            
    },
 }
})
