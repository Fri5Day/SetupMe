<template>
  <v-navigation-drawer v-model="isDrowerOpen">
    <v-list>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-group value="Montagem">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Montagem"></v-list-item>
        </template>

        <v-list-item>
          <v-btn flat @click="clickGamer()">Montagem Gamer</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn flat @click="clickProfessional()">Montagem profissional</v-btn>
        </v-list-item>
      </v-list-group>

      <v-btn flat @click="clickSimulator()" title="Simulador">Simulador</v-btn>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon
      @click="isDrowerOpen = !isDrowerOpen"
    ></v-app-bar-nav-icon>

    <img
      @click="clickHome()"
      src="../../assets/logoHome.png"
      alt="Logo do site"
    />
  </v-app-bar>
</template>

<script>
export default {
  data() {},

  methods: {
    clickProfessional() {
      this.$router.push({ name: "ProfessionalAssembly" });
    },

    clickGamer() {
      this.$router.push({ name: "GamerAssembly" });
    },

    clickHome() {
      this.$router.push({ name: "Home" });
    },

    clickSimulator() {
      this.$router.push({ name: "Simulator" });
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

const isDrowerOpen = ref(false);
</script>


<style>
</style>