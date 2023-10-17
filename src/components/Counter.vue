<template>
    <div class="conter">
        <h1 :style="{
            color: $store.state.colorCode
        }">
            {{ $store.state.counter }}
        </h1>
    </div>
</template>

<script>
export default {
    name: "CounterComponent",
}

</script>