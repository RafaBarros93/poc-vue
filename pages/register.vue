<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const register = () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "As senhas não coincidem!";
    return;
  }
  
  localStorage.setItem("user", JSON.stringify({ name: name.value, email: email.value }));
  successMessage.value = "Conta criada com sucesso!";
  setTimeout(() => router.push("/login"), 2000);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
    <img src="/logo.png" alt="Logo" class="mx-auto mb-8 w-32 h-32">
    <div class="w-96 p-8 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-white text-center text-2xl font-bold mb-6">Criar Conta</h2>
      <input v-model="name" type="text" placeholder="Nome" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <input v-model="email" type="email" placeholder="Email" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <input v-model="password" type="password" placeholder="Senha" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <input v-model="confirmPassword" type="password" placeholder="Confirmar Senha" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-green-500 text-sm mb-4">{{ successMessage }}</p>
      <button @click="register" class="w-full bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">Cadastrar</button>
      <router-link to="/login" class="block text-center text-gray-400 mt-4">Já tem uma conta? Faça login</router-link>
    </div>
  </div>
</template>
