<script setup>
</script>

<template>
    <RouterView />
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 200px;
    background: #003d29;
    color: #FFF;
}
.navbarMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.navbarMenu a {
    color: #FFF;
    font-size: 24px;
}
</style>
