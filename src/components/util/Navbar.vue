<template>
  <v-navigation-drawer v-model="isDrowerOpen">
    <v-list>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-group value="Montagem">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Montagem"></v-list-item>
        </template>

        <v-list-item>
          <v-btn flat>Montagem Gamer</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn flat @click="clickProfessional()">Montagem profissional</v-btn>
        </v-list-item>
      </v-list-group>

      <v-btn flat title="Simulador">Simulador</v-btn>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon
      @click="isDrowerOpen = !isDrowerOpen"
    ></v-app-bar-nav-icon>

    <img src="../../assets/logoHome.png" alt="Logo do site" />
  </v-app-bar>

</template>

<script>


export default {
    data(){

    },

    methods: {
     clickProfessional() {
      this.$router.push({ name: "MontagemProfissional" });
    },
  }
};
</script>

<script setup>
import { ref } from "vue";

const isDrowerOpen = ref(false);
</script>


<style>
</style>