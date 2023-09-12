<template>
  <div>
    <Navbar />
    <div class="mt-10">
      <v-row justify="center" align="center">
        <v-col
          v-for="(game, index) in games"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="mx-auto" max-width="300">
            <v-img
              class="align-end text-white"
              height="200"
              :src="game.image"
              cover
            ></v-img>

            <v-card-title>{{ game.name }}</v-card-title>

            <v-card-text>
              <div>{{ game.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn @click="clickMount()" color="orange">{{game.mout}}Montar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      games: [
        {
          name: "Valorant",
          description: "FPS Tático.",
          image: "https://gamearena.gg/wp-content/uploads/2023/08/VALORANT.jpg",
          mount: ""
        },
        {
          name: "GTA V",
          description: "Descrição do Jogo 1.",
          image:
            "https://assetsio.reedpopcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        },
        {
          name: "Baldurs Gate 3",
          description: "Descrição do Jogo 2.",
          image:
            "https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg?t=1692294127",
        },
        {
          name: "Starfield",
          description: "Descrição do Jogo 2.",
          image:
            "https://trecobox.com.br/wp-content/uploads/2023/09/trecobox.com.br-starfield-tudo-o-que-voce-precisa-saber-sobre-um-dos-games-do-ano-starfield.png",
        },
        {
          name: "The Witcher 3",
          description: "Descrição do Jogo 2.",
          image:
            "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2",
        },
        {
          name: "Forza Horizon 5",
          description: "Descrição do Jogo 2.",
          image:
            "https://cdn.akamai.steamstatic.com/steam/apps/2440490/capsule_616x353.jpg?t=1687805377",
        },
        {
          name: "Fifa 2023",
          description: "Descrição do Jogo 2.",
          image:
            "https://meups.com.br/wp-content/uploads/2022/07/FIFA-23-capa-900x503.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>
