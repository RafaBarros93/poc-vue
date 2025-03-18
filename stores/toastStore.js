import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
    state: () => ({
        toasts: [],
        contador: 0,
    }),
    actions: {
        mostrarToast({ tipo = 'sucesso', titulo, mensagem, duracao = 5000, posicao = 'top-right' }) {
            const id = this.contador;
            this.contador++;

            this.toasts.push({
                id,
                tipo,
                titulo,
                mensagem,
                duracao,
                posicao,
            });

            // Fechar automaticamente o toast após a duração
            setTimeout(() => {
                this.removerToast(id);
            }, duracao);
        },
        removerToast(id) {
            this.toasts = this.toasts.filter(toast => toast.id !== id);
        },
    },
});
