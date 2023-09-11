<template>
  <Navbar />
  <div>
    <v-row justify="center" align="center">
      <v-col class="mt-10" cols="12" sm="4" md="4" lg="3">
        <v-form>
          <v-select
            v-for="select in selects"
            :key="select.label"
            :label="select.label"
            :items="select.items"
            :item-props="itemProps"
            v-model="selectedItems[select.label]"
            item-text="name"
            item-value="price"
            variant="underlined"
            @change="updateTotal"
          ></v-select>
          <v-btn @click="clearSelections" color="primary">Limpar</v-btn>
        </v-form>
      </v-col>

      <v-col class="mt-10" cols="12" sm="4" md="4" lg="3">
        <v-card class="mx-auto" max-width="200">
          <v-card-title style="color: green"
            >Total: {{ calculateTotal() }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "../components/util/Navbar.vue"

export default {
  components:{Navbar},
  data() {
    return {
      selects: [
        {
          label: "Processador",
          items: [
            { name: "i5 7500", price: 800 },
            { name: "i7 9700", price: 1200 },
          ],
        },
        {
          label: "Placa-Mãe",
          items: [
            { name: "ASUS B450", price: 300 },
            { name: "MSI B550", price: 250 },
          ],
        },
        {
          label: "Placa de Vídeo",
          items: [
            { name: "NVIDIA GTX 1660", price: 350 },
            { name: "AMD Radeon RX 570", price: 300 },
          ],
        },
        {
          label: "Memória RAM",
          items: [
            { name: "8GB DDR4", price: 100 },
            { name: "16GB DDR4", price: 200 },
          ],
        },
        {
          label: "HD",
          items: [
            { name: "1TB", price: 150 },
            { name: "2TB", price: 250 },
          ],
        },
        {
          label: "SSD",
          items: [
            { name: "240GB", price: 100 },
            { name: "500GB", price: 150 },
          ],
        },
        {
          label: "Fonte",
          items: [
            { name: "500W", price: 80 },
            { name: "750W", price: 120 },
          ],
        },
      ],
      selectedItems: {},
    };
  },

  methods: {
    itemProps(item) {
      return {
        title: item.name,
        subtitle: item.price + "R$",
      };
    },

    updateTotal() {
      this.$forceUpdate(); // Força a atualização para refletir as mudanças nos selects.
    },

    calculateTotal() {
      let total = 0;

      for (const label in this.selectedItems) {
        if (this.selectedItems[label]) {
          total += this.selectedItems[label];
        }
      }

      return total + "R$";
    },

    clearSelections() {
      for (const label in this.selectedItems) {
        this.selectedItems[label] = null;
      }
    },
  },
};
</script>
