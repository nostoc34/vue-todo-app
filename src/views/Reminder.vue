<script setup>

import Navbar from '@/components/Navbar.vue';
import { ref, watch, onMounted } from 'vue';

const reminders = ref([]);
const newItem = ref("");

const addReminderItem = () => {
    if(newItem.value.trim() === "") {
        return
    }
    reminders.value.push(newItem.value);
    newItem.value = "";
};

const removeReminderItem = (item) => {
    reminders.value = reminders.value.filter(t => t !== item);
};

watch(reminders, newVal => {
    localStorage.setItem("reminders", JSON.stringify(newVal))
}, {deep: true});

onMounted(() => {
    reminders.value = JSON.parse(localStorage.getItem("reminders")) || [];
});

</script>

<template>
    <Navbar />
    <div class="reminders-container">
        <div class="input-container">
            <input type="text" placeholder="What to remember?" v-model="newItem" @keyup.enter="addReminderItem">
            <button @click="addReminderItem">Add</button>
        </div>
        <div class="list-container">
            <div v-for="item in reminders" :class="`list-item`">
                <div>{{ item }}</div>
                <button @click="removeReminderItem(item)">Delete</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reminders-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0;
}
.input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.input-container input {
    padding: 10px;
    background: #003d29;
    color: #FFF;
    border: none;
    border-radius: 10px;
    width: 400px;
    font-size: 20px;
}
.input-container button {
    width: 200px;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    background: #50e0b0;
    border: 1px solid #FFF;
    border-radius: 10px;
}

.input-container button:hover {
    background: #FFF;
    border: 1px solid #50e0b0;
}
.list-container {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.list-item {
    color: #FFF;
    background: #003d29;
    border: 3px solid #FFF;
    width: 400px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>