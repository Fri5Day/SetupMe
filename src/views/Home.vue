<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="mt-10"> 
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
    return {
      
    };
  },

};
</script>

<style>
</style>