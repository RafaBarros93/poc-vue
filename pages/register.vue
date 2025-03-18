<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
  >
    <div class="w-full max-w-md flex justify-between items-center mb-8">
      <img src="/logo.png" alt="Logo" />
      <Button @click="handleRegisterHome">Sair</Button>
    </div>

    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-white text-center text-2xl font-semibold mb-2">
        Crie sua conta
      </h2>
      <p class="text-gray-400 text-center mb-6">Rápido e grátis, vamos nessa</p>

      <input
        v-model="user.name"
        type="text"
        placeholder="Digite aqui seu nome"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />
      <input
        v-model="user.email"
        type="email"
        placeholder="Digite aqui seu email"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />
      <input
        v-model="user.password"
        type="password"
        placeholder="Digite aqui sua senha"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />
      <input
        v-model="user.confirmPassword"
        type="password"
        placeholder="Digite novamente sua senha"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />
      <textarea
        v-model="user.bio"
        placeholder="Fale sobre você"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />
      <input
        v-model="user.contact"
        type="text"
        placeholder="Opção de contato"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      />

      <select
        v-model="user.role"
        class="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500"
      >
        <option value="">Selecionar Cargo</option>
        <option value="frontend">Desenvolvedor Front-End</option>
        <option value="backend">Desenvolvedor Back-End</option>
        <option value="fullstack">Desenvolvedor Full-Stack</option>
      </select>

      <button
        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded text-lg font-semibold"
        @click="handleSubmit"
      >
        Cadastrar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // Importe o Axios
import { useToastStore } from '../stores/toastStore'
import { useUserStore } from '../stores/userStore' // Importe a store
import Button from '../components/button.vue'

const router = useRouter()
const { mostrarToast } = useToastStore()
const user = useUserStore() // Use a store do Pinia

const handleRegisterHome = () => {
  router.push('/login')
}

const handleSubmit = async () => {
  try {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      bio: user.bio,
      contact: user.contact,
      role: user.role,
    }

    const response = await axios.post(
      'http://localhost:3001/api/registrar/usuario',
      data
    )

    if (response.status === 200) {
      mostrarToast({
        tipo: 'sucesso',
        mensagem: response.data.message,
        posicao: 'top-right',
        duracao: 5000,
      })
      router.push('/login')
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      mostrarToast({
        tipo: 'erro',
        mensagem:
          error.response?.data.message || 'Erro ao registrar o usuário.',
        duracao: 5000,
      })
    } else {
      mostrarToast({
        tipo: 'erro',
        mensagem: 'Erro desconhecido ao enviar formulário.',
        duracao: 5000,
      })
    }
  }
}
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui */
</style>
