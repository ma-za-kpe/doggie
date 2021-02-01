<template>
  <v-main class="pa-0">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="card in $store.getters.filteredDogs"
          :key="card.id"
          cols="12"
          sm="4"
          md="3"
        >
          <!-- <v-card>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="card.url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.name"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-btn color="primary" outlined icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn color="primary" icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="pa-3" icon color="primary" light>
                <v-icon left> mdi-more </v-icon>
              </v-btn>
              <v-btn class="pa-3" icon color="primary" light>
                <v-icon left> mdi-cart-plus </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card> -->
          <v-card class="mx-auto" max-width="344">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="card.url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>

            <v-card-title v-text="card.name">
              Top western road trips
            </v-card-title>

            <v-card-subtitle v-text="card.bred_for">
            </v-card-subtitle>

            <v-card-actions class="pt-0">
              <v-btn color="primary lighten-2" text> More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>life_span</v-list-item-title>
                    <v-list-item-subtitle
                      v-html="card.life_span"
                    ></v-list-item-subtitle>
                    <v-list-item-title class="pt-3">temperament</v-list-item-title>
                    <v-list-item-subtitle
                      v-html="card.temperament"
                    ></v-list-item-subtitle>
                    <v-list-item-title class="pt-3">weight</v-list-item-title>
                    <v-list-item-subtitle
                      v-html="card.weight.imperial"
                    ></v-list-item-subtitle>
                     <v-list-item-title class="pt-3">height</v-list-item-title>
                    <v-list-item-subtitle
                      v-html="card.height.imperial"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-btn color="primary" outlined icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn color="primary" icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>

                  <v-btn class="pa-3" icon color="primary" light>
                    <v-icon left> mdi-cart-plus </v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      show: false,
    };
  },
  computed: mapState(["dog"]),
  mounted() {
    this.$store.dispatch("getAllDogs");
  },
};
</script>