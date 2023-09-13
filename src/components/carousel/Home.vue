<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <img :src="image" alt="Slide {{ i + 1 }}" />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://gaspor.github.io/setupMe/resources/images/imagem-slide1.svg",
        "https://gaspor.github.io/setupMe/resources/images/imagem-slide2.svg",
        "https://gaspor.github.io/setupMe/resources/images/imagem-slide3.svg",
        "https://gaspor.github.io/setupMe/resources/images/imagem-slide4.svg",
      ],
    };
  },
};
</script>

<style>
</style>
