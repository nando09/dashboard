<template>
  <Default :menu="ContentEmployees" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentEmployees from '../layouts/contents/Employees/ContentEmployees.vue';

const subMenus = [
  {
    id: 1,
    name: 'Funcionarios',
    router: '/funcionarios'
  }
];

</script>