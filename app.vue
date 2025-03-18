<script setup>
definePageMeta({
  middleware: 'auth',
})
import Toast from '@/components/toast.vue'
</script>

<template>
  <NuxtPage />
  <Toast />
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
