<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">DOGS</span>
        <v-icon x-large>mdi-dog</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <Shop />
      <Search />
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Search from "./components/tools/Search";
import Shop from "./components/tools/Shop";

export default {
  name: "App",

  components: {
    Home,
    Search,
    Shop,
  },

  data: () => ({
    //
  }),
};
</script>
