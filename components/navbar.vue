<template>
  <nav class="bg-gray-900 p-4 flex justify-between items-center">
    <img src="/logo.png" alt="Logo" class="w-32 h-32 ml-0" />
    <!-- Imagem alinhada à esquerda -->
    <div>
      <Button @click="handleRegisterClick">Sair</Button>
    </div>
  </nav>
</template>
<script>
import { useRouter } from 'vue-router'
import Button from './Button.vue'

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter()

    const handleRegisterClick = () => {
      router.push('/') // Redireciona para a rota "/login"
    }

    return {
      handleRegisterClick,
    }
  },
}
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui */
</style>
