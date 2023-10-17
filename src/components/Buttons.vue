<template>
    <div class="buttons">
        <button @click="$store.dispatch('decrement')">-</button>
        <button @click="$store.dispatch('increment')">+</button>
    </div>
</template>

<script>

export default {
    name: "ButtonsComponent",
}
</script>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.buttons>button {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>