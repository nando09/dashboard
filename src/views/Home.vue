<template>
  <div class="bg-blue-500">
    <h1>Testando</h1>
  </div>
  <p>{{ name }}</p>
  <MyComponents />
</template>

<script setup>
import MyComponents from '../components/MyComponents.vue';
const name = 'Fernando Batista'
</script>
