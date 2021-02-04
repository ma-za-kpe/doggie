<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/layout/Nav";

// import firebase from "firebase";

export default {
  name: "App",

  components: {
    Nav,
  },

  data: () => ({
    //
  }),
  // mounted() {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log("User is signed in");
  //     } else {
  //       // No user is signed in.
  //       console.log("No User is signed in");
  //     }
  //   });
  // },
};
</script>
