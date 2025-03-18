<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Redireciona para a página de login automaticamente
router.push('/login')
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <p class="text-lg text-gray-700">Redirecionando...</p>
  </div>
</template>
