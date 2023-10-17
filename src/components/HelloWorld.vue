<template>
  <div>
    <counter />
    <counter-squared />
    <buttons />
    <input-component />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  components: {
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'buttons': require('@/components/Buttons.vue').default,
    'input-component': require('@/components/Input.vue').default
  }
}
</script>

<style scoped>
div {
  margin: 10px;
}
</style>