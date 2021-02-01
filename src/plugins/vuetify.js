import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.pink.darken1, // #E53935
          secondary: colors.pink.lighten4, // #FFCDD2
          accent: colors.teal.base, // #3F51B5
        },
      },
    },
  })

