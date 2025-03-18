<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = () => {
  if (email.value === "teste@capys.com.br" && password.value === "123456") {
    localStorage.setItem("user", JSON.stringify({ email: email.value }));
    router.push("/home");
  } else {
    errorMessage.value = "Email ou senha inválidos";
  }
};
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-gray-900">
    <div class="w-96 p-8 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-white text-center text-2xl font-bold mb-6">Login</h2>
      <input v-model="email" type="email" placeholder="Email" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <input v-model="password" type="password" placeholder="Senha" class="w-full mb-4 p-2 rounded bg-gray-700 text-white">
      <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
      <button @click="login" class="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded">Entrar</button>
      <router-link to="/register" class="block text-center text-gray-400 mt-4">Cadastre-se</router-link>
    </div>
  </div>
</template>
