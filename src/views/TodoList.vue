<script setup>

import Navbar from '@/components/Navbar.vue';
import { ref, watch, onMounted } from 'vue';

const todos = ref([]);
const newItem = ref("");

const addTodoItem = () => {
    if(newItem.value.trim() === "") {
        return
    }
    todos.value.push(newItem.value);
    newItem.value = "";
};

const removeTodoItem = (todo) => {
    todos.value = todos.value.filter(t => t !== todo);
};

watch(todos, newVal => {
    localStorage.setItem("todos", JSON.stringify(newVal))
}, {deep: true});

onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});

</script>

<template>
    <Navbar />
    <div class="todo-container">
        <div class="input-container">
            <input type="text" placeholder="What to do?" v-model="newItem"  @keyup.enter="addTodoItem">
            <button @click="addTodoItem">Add</button>
        </div>
        <div class="list-container">
            <div v-for="todo in todos" :class="`list-item`">
                <div>{{ todo }}</div>
                <button @click="removeTodoItem(todo)">Delete</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.todo-container {
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