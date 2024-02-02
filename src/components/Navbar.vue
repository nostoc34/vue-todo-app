<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="navbar">
        <div class="navbarMenu">
            <RouterLink active-class="active" to="/">Home</RouterLink>
            <RouterLink active-class="active" to="/todolist">To-Do List</RouterLink>
            <RouterLink active-class="active" to="/shoplist">Shop List</RouterLink>
            <RouterLink active-class="active" to="/reminders">Reminders</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 200px;
    background: #003d29;
    color: #FFF;
}
.navbarMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.navbarMenu a {
    font-size: 24px;
}

.navbarMenu a:hover {
    color: #50e0b0;
}
.active {
    border-bottom: 1px solid #FFF;
}
</style>