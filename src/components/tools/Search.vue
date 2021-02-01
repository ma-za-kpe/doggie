<template>
  <v-text-field
    :value="$store.state.searchTerm"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    :class="{ close: searchClosed && !$store.state.searchTerm }"
    prepend-inner-icon="mdi-magnify"
    clearable
    solo
    dense
    light
    hide-details
    label="Search dog"
    placeholder="German sheperd."
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style>
.close {
  width: 0px;
}
.v-icon {
  cursor: pointer;
}
</style>