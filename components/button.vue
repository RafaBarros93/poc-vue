<template>
  <button
    :class="[
      'text-white px-4 py-2 rounded text-sm sm:text-base md:px-6 md:py-3',
      className,
    ]"
    :style="{ backgroundColor: '#021A30', borderRadius: '12px' }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    // O slot permite que os filhos sejam passados dentro do componente
    className: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui */
</style>
