export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const user = localStorage.getItem("user");
        if (!user && to.path !== "/login" && to.path !== "/register") {
            return navigateTo("/login");
        }
    }
});
