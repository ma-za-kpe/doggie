import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import firebase from "./../firebase/firebase";
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";
import firebase from "firebase";

import Localbase from 'localbase'

let db = new Localbase('db')

db.config.debug = false

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    searchTerm: null,
    user: {
      loggedIn: false,
      data: null
    },
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
    },
    SET_USER(state, user) {
      state.user.data = user
      console.log(user)
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
  },
  actions: {
    login({ commit }, path) {
      // FirebaseUI config.
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function (authResult) {
            console.log("user " + authResult)
            // var user = authResult.user;
            // var credential = authResult.credential;
            // var isNewUser = authResult.additionalUserInfo.isNewUser;
            // var providerId = authResult.additionalUserInfo.providerId;
            // var operationType = authResult.operationType;
            // Do something with the returned AuthResult.
            // Return type determines whether we continue the redirect
            // automatically or whether we leave that to developer to handle.
            commit("SET_LOGGED_IN", true);
            commit("SET_USER", authResult);
            // set to false, such that we a developer can redirect
            return false;
          },
          signInFailure: function (error) {
            // Some unrecoverable error occurred during sign-in.
            // Return a promise when error handling is completed and FirebaseUI
            // will reset, clearing any UI. This commonly occurs for error code
            // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
            // occurs. Check below for more details on this.
            console.log("error " + error)
            return false;
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: path,
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        // tosUrl: "<your-tos-url>",
        // Privacy policy url/callback.
        // privacyPolicyUrl: function () {
        //   window.location.assign("<your-privacy-policy-url>");
        // },
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start("#firebaseui-auth-container", uiConfig);
    },
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

