import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "./firebase/firebase";

Vue.config.productionTip = false

let app = null;

firebase.auth().onAuthStateChanged((user) => {
  console.log("main "+ user)

  //init if app is not yet created 
  //This ensures Firebase initializes before loading the app when a user refreshes a page.
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }

})

