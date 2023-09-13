<template>
  <div>
    <v-row justify="center" align="center">
      <v-col
        v-for="(montagem, index) in montagens"
        :key="index"
        cols="12"
        sm="4"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="align-end text-white"
            height="200"
            :src="montagem.image"
            cover
          >
          </v-img>

          <v-card-title>{{ montagem.title }}</v-card-title>

          <v-card-text>
            <div>{{ montagem.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="openDialog(montagem.id)" color="orange"
              >Montar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Diálogo para exibir as especificações da montagem selecionada -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>{{ selectedMontagem.title }}</v-card-title>
        <v-card-text>
          <table>
            <tr>
              <td>CPU:</td>
              <td>{{ selectedMontagem.cpu }}</td>
            </tr>
            <tr>
              <td>GPU:</td>
              <td>{{ selectedMontagem.gpu }}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>{{ selectedMontagem.ram }}</td>
            </tr>
            <tr>
              <td>S.O.:</td>
              <td>{{ selectedMontagem.os }}</td>
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
export default {
  data() {
    return {
      montagens: [
        {
          id: 1,
          title: "Montagem Básica",
          description:
            "Recomendado em uso de pacote Office (Excel, Word, Power Point, etc), navgador e extensões em geral, como o PDF.",
          image: "https://i.blogs.es/1cb778/microsoft-365/840_560.jpeg",
          cpu: "Intel Core i3 / AMD Ryzen 5",
          gpu: "Intel UHD Graphics / AMD Radeon Vega",
          ram: "8GB",
          os: "Windows 7/8/10",
        },
        {
          id: 2,
          title: "Montagem Média",
          description:
            "Recomendado em uso de programação (C++, Java, JavaScript, etc), Photoshop e programas para desenvolvimento em geral.",
          image:
            "https://ferreiranews.com.br/wp-content/uploads/2023/07/interna-blog-coding-05.jpg",
          cpu: "	Intel Core i5 7400 / AMD Ryzen 5",
          gpu: "Nvidia GTX 1660 / AMD Radeon RX 5600 XT",
          ram: "16",
          os: "Windows 10/11",
        },
        {
          id: 3,
          title: "Montagem Avançada",
          description:
            "Recomendado em programas de edições de vídeo (Sony Vegas, DaVinci Resolve, etc), processamento de imagem (CorelDraw, 3DSMax, etc).",
          image:
            "https://res.cloudinary.com/dte7upwcr/image/upload/v1616611226/blog/blog2/edicao-de-video/image_1-edicao-de-video-programas-de-edicao-de-video-profissional.jpg",
          cpu: "Intel Core i7-1165G7 / AMD Ryzen 7 3700X ",
          gpu: "RTX 3060 Ti / AMD Radeon ",
          ram: "32GB",
          os: "Windows 10/11",
        },
        // Adicione informações para outras montagens aqui
      ],
      dialog: false,
      selectedMontagem: null,
    };
  },
  methods: {
    openDialog(id) {
      this.selectedMontagem = this.montagens.find(
        (montagem) => montagem.id === id
      );
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
