<template>
  <v-app-bar app color="primary" dark>
    <v-btn target="_blank" text>
      <span class="mr-2">DOGS</span>
      <v-icon x-large>mdi-dog</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-icon v-if="!$store.state.user.loggedIn" @click="logout" x-large>mdi-logout</v-icon>
    <Shop />
    <Search />
  </v-app-bar>
</template>

<script>
import Search from "../tools/Search";
import Shop from "../tools/Shop";
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  components: {
    Search,
    Shop,
  },
  methods: {
    logout() {
      //this.$emit("trying to sign out user");
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
          this.$route.push("/");
          // then hie the logout button
        })
        .catch(function (error) {
          //this.$emit("signout error", error);
          error;
          // An error happened.
        });
    },
  },
};
</script>

<style>
</style>