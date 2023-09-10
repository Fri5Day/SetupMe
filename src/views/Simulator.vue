<!--Testes de envio da lista sem backend-->

<template>
  <Navbar />
  <div>
    <v-row justify="center" align="center">
      <v-col class="mt-10" cols="12" sm="4" md="4" lg="3">
        <v-form>
          <v-select
            label="Processador"
            v-model="selectedProcessador"
            :items="optionsData.Processador"
          ></v-select>
          <v-select
            label="Placa-Mãe"
            v-model="selectedPlacaMae"
            :items="optionsData.PlacaMae"
          ></v-select>
          <v-select
            label="Cooler/Water-Cooler"
            v-model="selectedCooler"
            :items="optionsData.Cooler"
          ></v-select>
          <v-select
            label="Placa de Video"
            v-model="selectedPlacaVideo"
            :items="optionsData.PlacaVideo"
          ></v-select>
          <v-select
            label="Memória Ram"
            v-model="selectedMemoriaRam"
            :items="optionsData.MemoriaRam"
          ></v-select>
          <v-select
            label="HD"
            v-model="selectedHD"
            :items="optionsData.HD"
          ></v-select>
          <v-select
            label="SSD"
            v-model="selectedSSD"
            :items="optionsData.SSD"
          ></v-select>
          <v-select
            label="Fonte"
            v-model="selectedFonte"
            :items="optionsData.Fonte"
          ></v-select>
        </v-form>
      </v-col>

      <v-col class="mt-10" cols="12" sm="4" md="4" lg="3">
        <v-card class="mx-auto" max-width="200">
          <v-card-title style="color: green;">Total: {{ calcularTotal }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";

export default {
  components: { Navbar },

  data() {
    return {
      selectedProcessador: null,
      selectedPlacaMae: null,
      selectedCooler: null,
      selectedPlacaVideo: null,
      selectedMemoriaRam: null,
      selectedHD: null,
      selectedSSD: null,
      selectedFonte: null,
      optionsData: {
        Processador: [
          {text: "teste", value:"teste", price:150}
        ],
        PlacaMae: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        Cooler: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        PlacaVideo: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        MemoriaRam: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        HD: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        SSD: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
        Fonte: [
          { text: "Placa-Mãe A", value: "Placa-Mãe A", price: 150 },
          { text: "Placa-Mãe B", value: "Placa-Mãe B", price: 250 },
        ],
      },
    };
  },

  computed: {
    calcularTotal() {
      let total = 0;

      // Somar os preços das seleções
      total += this.getSelectedPrice(this.selectedProcessador);
      total += this.getSelectedPrice(this.selectedPlacaMae);
      total += this.getSelectedPrice(this.selectedCooler);
      total += this.getSelectedPrice(this.selectedPlacaVideo);
      total += this.getSelectedPrice(this.selectedMemoriaRam);
      total += this.getSelectedPrice(this.selectedHD);
      total += this.getSelectedPrice(this.selectedSSD);
      total += this.getSelectedPrice(this.selectedFonte);

      return total;
    },
  },

  methods: {
    getSelectedPrice(selectedItem) {
      if (!selectedItem) return 0;

      const category = Object.keys(this.optionsData).find((category) =>
        this.optionsData[category].find(
          (option) => option.value === selectedItem
        )
      );

      if (category) {
        const item = this.optionsData[category].find(
          (option) => option.value === selectedItem
        );
        return item.price || 0;
      }

      return 0;
    },
  },
};
</script>

<style>
</style>
