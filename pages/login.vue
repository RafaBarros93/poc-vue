<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
  >
    <!-- Logo -->
    <img src="/logo.png" alt="Logo" class="mx-auto mb-8 w-32 h-32" />

    <div class="bg-[#021A30] p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-white text-center text-2xl font-semibold mb-6">Login</h2>

      <!-- Campo de Email -->
      <div class="mb-4">
        <label class="block text-gray-400 mb-1">Email</label>
        <input
          type="email"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          v-model="user.email"
        />
      </div>

      <!-- Campo de Senha -->
      <div class="mb-4">
        <label class="block text-gray-400 mb-1">Senha</label>
        <input
          type="password"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          v-model="user.password"
        />
      </div>

      <!-- Botão de Login -->
      <button
        class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded text-lg font-semibold"
        @click="handleLogin"
      >
        Entrar
      </button>

      <!-- Link para Registro -->
      <p class="text-center text-gray-400 mt-4">Ainda não possui uma conta?</p>
      <button
        class="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded mt-2"
        @click="handleRegisterClick"
      >
        Cadastre-se
      </button>
    </div>
  </div>
</template>

<script setup>
// Importações
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useToastStore } from '../stores/toastStore'
import { useUserStore } from '../stores/userStore' // Importe a store

// Estado reativo
const email = ref('')
const password = ref('')

// Instâncias
const { mostrarToast } = useToastStore()

const user = useUserStore() // Use a store do Pinia

const router = useRouter()

// Função para redirecionar para a página de registro
const handleRegisterClick = () => {
  router.push('/register')
}

// Função para o login
const handleLogin = async () => {
  try {
    // Você pode fazer a requisição HTTP aqui para login

    // Requisição de login
    const response = await axios.post('http://localhost:3001/api/login', {
      email: email.value,
      password: password.value,
    })

    if (response.status === 200) {
      // Exibe o toast de sucesso
      mostrarToast({
        tipo: 'sucesso',
        mensagem: response.data.message,
        posicao: 'top-right',
        duracao: 2000,
      })

      // Redireciona para a página de home após login
      router.push('/home')
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      mostrarToast({
        tipo: 'erro',
        mensagem:
          error.response?.data.message || 'Erro ao logar com o usuário.',
        duracao: 8000,
      })
    } else {
      mostrarToast({
        tipo: 'erro',
        mensagem: 'Erro desconhecido ao enviar formulário.',
        duracao: 8000,
      })
    }
  }
}
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui */
</style>
