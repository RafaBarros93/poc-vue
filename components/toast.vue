<template>
  <div
    v-for="toast in toasts"
    :key="toast.id"
    :class="[
      'fixed',
      posicoes[toast.posicao],
      'z-50',
      'max-w-md',
      'w-full',
      'md:w-auto',
      'shadow-lg',
      'rounded-md',
      'overflow-hidden',
    ]"
  >
    <div :class="['bg-gray-800', 'text-white', 'p-4', 'flex', 'items-center']">
      <div
        :class="[
          tiposToast[toast.tipo].corFundo,
          'rounded-full',
          'p-1',
          'mr-3',
          'flex-shrink-0',
        ]"
      >
        <component
          :is="tiposToast[toast.tipo].icone"
          class="h-6 w-6 text-white"
        />
      </div>
      <div class="flex-1">
        <p v-if="toast.titulo" class="font-bold">{{ toast.titulo }}</p>
        <p class="text-gray-200">
          {{ toast.mensagem || tiposToast[toast.tipo].mensagemPadrao }}
        </p>
      </div>
      <button
        @click="removerToast(toast.id)"
        class="ml-4 text-gray-400 hover:text-white transition-colors"
        aria-label="Fechar"
      >
        <X class="h-6 w-6" />
      </button>
    </div>
    <div
      :class="['h-1', tiposToast[toast.tipo].corFundo]"
      :style="{ animationDuration: `${toast.duracao}ms` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-vue-next' // Certifique-se de que lucide-vue está instalado

const toastStore = useToastStore()

// Mapeamento dos tipos de toast
const tiposToast = {
  sucesso: {
    icone: CheckCircle,
    corFundo: 'bg-green-500',
    titulo: 'Sucesso!',
    mensagemPadrao: 'Operação realizada com sucesso!',
  },
  erro: {
    icone: AlertCircle,
    corFundo: 'bg-red-500',
    titulo: 'Erro!',
    mensagemPadrao: 'Ops! Algo deu errado.',
  },
  info: {
    icone: Info,
    corFundo: 'bg-blue-500',
    titulo: 'Informação',
    mensagemPadrao: 'Atenção a esta informação.',
  },
  aviso: {
    icone: AlertCircle,
    corFundo: 'bg-yellow-500',
    titulo: 'Aviso',
    mensagemPadrao: 'Atenção a este aviso.',
  },
}

// Mapeamento das posições
const posicoes = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
}

const toasts = computed(() => toastStore.toasts)

const removerToast = (id) => {
  toastStore.removerToast(id)
}
</script>

<style scoped>
/* Adicionar animações ou estilos conforme necessário */
</style>
