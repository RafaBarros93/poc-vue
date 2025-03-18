<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    router.push("/login");
  }
});

const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h1 class="text-3xl font-bold mb-4">Bem-vindo!</h1>
    <p>Nossa aplicação está em desenvolvimento</p>
    <button @click="logout" class="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Sair</button>
  </div>
</template>
