<template>
  <div>
    <Navbar />
    <h1 class="text-center mt-5">Vai jogar o quê?</h1>
    <h2 class="text-center">Destaques</h2>
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

            <v-card-actions>
              <v-btn @click="openDialog(index)" color="orange">Montar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>{{ selectedGame.name }}</v-card-title>
        <v-card-text>
          <table>
            <tr>
              <th>Componente</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>CPU:</td>
              <td>{{ selectedGame.cpu }}</td>
            </tr>
            <tr>
              <td>GPU:</td>
              <td>{{ selectedGame.gpu }}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>{{ selectedGame.ram }}</td>
            </tr>
            <tr>
              <td>Sistema Operacional:</td>
              <td>{{ selectedGame.os }}</td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
          image: "https://gamearena.gg/wp-content/uploads/2023/08/VALORANT.jpg",
          cpu: "Intel i3-4150 / AMD Ryzen 3 1200 ",
          gpu: "GeForce GT 730 / AMD Radeon R7 240",
          ram: "4GB",
          os: "Windows 10/11",
        },
        {
          name: "GTA V",
          image:
            "https://assetsio.reedpopcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
          cpu: "Intel Core i5 3470 / AMD X8 FX-8350",
          gpu: "NVIDIA GTX 660 2 GB / AMD HD7870 2 GB.",
          ram: "8GB",
          os: "Windows 10/11",
        },
        {
          name: "Baldurs Gate 3",
          image:
            "https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg?t=1692294127",
          cpu: "Intel I5 4690 / AMD FX 8350",
          gpu: "Nvidia GTX 970 / RX 480 (4GB+ de VRAM)",
          ram: "8GB",
          os: "Windows 10/11",
        },
        {
          name: "Starfield",
          image:
            "https://trecobox.com.br/wp-content/uploads/2023/09/trecobox.com.br-starfield-tudo-o-que-voce-precisa-saber-sobre-um-dos-games-do-ano-starfield.png",
          cpu: "AMD Ryzen 5 2600X / Intel Core i7-6800K.",
          gpu: "AMD Radeon RX 5700 / NVIDIA GeForce 1070 Ti",
          ram: "16GB",
          os: "Windows 10/11",
        },
        {
          name: "The Witcher 3",
          image:
            "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2",
          cpu: "Intel CPU Core i5-2500K / AMD A10-5800K",
          gpu: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
          ram: "6GB",
          os: "Windows 10/11",
        },
        {
          name: "Forza Horizon 5",
          image:
            "https://cdn.akamai.steamstatic.com/steam/apps/2440490/capsule_616x353.jpg?t=1687805377",
          cpu: "AMD Ryzen 3 1200 / Intel Core i5-4460",
          gpu: " AMD Radeon RX 570 / Nvidia GeForce GTX 970",
          ram: "8GB",
          os: "Windows 10/11",
        },
        {
          name: "Fifa 2023",
          image:
            "https://meups.com.br/wp-content/uploads/2022/07/FIFA-23-capa-900x503.jpg",
          cpu: "Intel Core i5 6600k / AMD Ryzen 5 1600",
          gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570",
          ram: "8GB",
          os: "Windows 10/11",
        },
      ],

      dialog: false,
      selectedGame: null,
    };
  },

  methods: {
    openDialog(index) {
      this.selectedGame = this.games[index];
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>
