<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="homeContainer">
        <div class="home-header">
            To-Do App
        </div>
        <div class="home-menu">
            <div class="menu-item">
                <RouterLink to="/todolist">To-Do List</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink to="/shoplist">Shop List</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink to="/reminders">Reminders</RouterLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.homeContainer {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.home-header {
    color: #16ae7b;
    font-size: 96px;
    font-weight: 900;
}
.home-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: #FFF;
    font-size: 24px;
}
.menu-item {
    cursor: pointer;
}
.menu-item a:hover {
    color: #50e0b0;
}
</style>