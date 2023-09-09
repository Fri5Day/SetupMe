<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container> 
        <Carousel />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";
import Carousel from "../components/carousel/Home.vue";

export default {
  components: { Navbar, Carousel },
  data() {

  },

};
</script>

<style>
</style>