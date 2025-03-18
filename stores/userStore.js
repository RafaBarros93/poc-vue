import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: '',
        contact: '',
        role: '',
    }),
    actions: {
        setForm(formData) {
            this.name = formData.name;
            this.email = formData.email;
            this.password = formData.password;
            this.confirmPassword = formData.confirmPassword;
            this.bio = formData.bio;
            this.contact = formData.contact;
            this.role = formData.role;
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.bio = '';
            this.contact = '';
            this.role = '';
        },
        setLogin(email, password) {
            this.email = email;
            this.password = password;
        }



    },
});
