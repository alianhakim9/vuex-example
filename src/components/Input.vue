<template>
    <div class="input">
        <input type="text" v-model="colorCode" placeholder="Enter color code">
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    computed: {
        // vuex two way binding
        colorCode: {
            get() {
                return this.$store.state.colorCode;
            },
            set(newValue) {
                console.log(newValue);
                this.$store.commit('setColor', newValue);
            }
        }
    },
}

</script>