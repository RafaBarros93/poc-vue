<template>
  <div class="bg-[#021A30] min-h-screen text-white flex flex-col">
    <Navbar />

    <!-- Linha separadora -->
    <hr class="border-gray-700" />

    <!-- Seção logo abaixo do cabeçalho -->
    <div
      class="bg-gray-900 w-full py-6 px-10 flex justify-between items-center"
    >
      <h2 class="text-2xl font-bold">
        Olá, {{ user.email ? user.email : 'Usuário' }}
      </h2>
      <p class="text-gray-400">Desenvolvedor Front-End</p>
    </div>

    <!-- Conteúdo principal -->
    <div class="w-full flex flex-col items-center justify-center py-10">
      <h3 class="text-lg font-bold">Que pena! Estamos em desenvolvimento :(</h3>
      <p class="text-gray-300 mt-2">
        Nossa aplicação está em desenvolvimento, em breve teremos novidades.
      </p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore' // Importe a store
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
  setup() {
    const user = useUserStore() // Use a store do Pinia

    return {
      user, // Expondo a store para o template
    }
  },
}
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui */
</style>
