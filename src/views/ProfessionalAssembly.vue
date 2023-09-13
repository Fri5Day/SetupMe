<template>
  <Navbar />
  <h1 class="text-center mt-5">Melhor performance no trabalho</h1>
  <div class="mt-10">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12" lg="12">
        <Cards />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";
import Cards from "../components/cards/ProfessionalAssembly.vue";

export default {
  components: { Navbar, Cards },

  data() {},
};
</script>

<style>
</style>
