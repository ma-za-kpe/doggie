import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Localbase from 'localbase'

let db = new Localbase('db')

db.config.debug = false

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    searchTerm: null,
    dog: [],
    dogs: [
      {
        "bred_for": "A wild pack animal",
        "height": {
          "imperial": "30",
          "metric": "76"
        },
        "id": 3,
        "life_span": "11 years",
        "name": "African Hunting Dog",
        "origin": "",
        "temperament": "Wild, Hardworking, Dutiful",
        "weight": {
          "imperial": "44 - 66",
          "metric": "20 - 30"
        },
        "url": "https://raw.githubusercontent.com/DevTides/DogsApi/master/3.jpg"
      }
    ],
  },
  mutations: {
    setSearch(state, value) {
      state.searchTerm = value
    },
    SET_DOGS(state, dogs) {
      state.dog = dogs
    }
  },
  actions: {
    getAllDogs(
      { commit }
    ) {
      db.collection('dogs').get().then(dogs => {
        if (!dogs.length) {
          // check if local storage is empty, else fetch from the server and add to dogs array
          axios.get('https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json')
            .then(response => {
              response.data.forEach(element => {

                //cache them locally, in dogs array
                db.collection('dogs').add(element).then(() => {
                  console.log("dogs added once")
                })
              });
            })
        } else {
          // if local storage is not empty, fetch from local storage
          commit('SET_DOGS', dogs)
        }
      })
    }
  },
  getters: {
    allDogs: state => {
      return state.dog;
    },
    filteredDogs(state) {
      if (!state.searchTerm) {
        return state.dog
      }

      return state.dog.filter(dog => dog.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }
  },
  modules: {
  }
})
