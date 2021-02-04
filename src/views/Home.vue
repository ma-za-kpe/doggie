<template>
  <v-main class="pa-0">
    <v-container fluid>
      <div>user : {{$store.state.user}}</div>
      <section class="pa-3" id="firebaseui-auth-container"></section>
      <v-row>
        <v-col
          v-for="card in $store.getters.filteredDogs"
          :key="card.id"
          cols="12"
          sm="4"
          md="3"
        >
          <DogCard :card="card" @log-in="like" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import DogCard from "../components/tools/Card";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    DogCard,
  },
  data() {
    return {};
  },
  computed: mapState(["dog"]),
  mounted() {
    this.$store.dispatch("getAllDogs");
  },
  methods: {
    like() {
      // stay on current page, do not redirect
      const vm = this;
      //check if a user is already signed in, or else show the sign in popup
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in// do an action like liking
          console.log("user already signed in " + vm.$store.state.user);
        } else {
          // No user is signed in, fire sign in action.
          console.log("no user signed in");
          // trigger login action and pass in the path to redirect to.
          vm.$store.dispatch("login", "/");
        }
      });
    },
  },
};
</script>