<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Add 1</button>
</template>

<script setup>
import { ref } from "vue"
const count = ref(0)
</script>