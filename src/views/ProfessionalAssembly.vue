<template>
  <Navbar />
  <div class="mt-10">
    <v-row justify="center" align="center">
      <!-- Card 1 -->
      <v-col cols="12" sm="4" md="4" lg="3">
        <Basic />
      </v-col>

      <!-- Card 2 -->
      <v-col cols="12" sm="4" md="4" lg="3">
        <Average />
      </v-col>

      <!-- Card 3 -->
      <v-col cols="12" sm="4" md="4" lg="3">
        <Advanced />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";
import Basic from "../components/cards/Basic.vue";
import Average from "../components/cards/Average.vue";
import Advanced from "../components/cards/Advanced.vue";

export default {
  components: { Navbar, Basic, Average, Advanced },

  data() {},
};
</script>

<style>
</style>
