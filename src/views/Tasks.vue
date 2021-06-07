<template>
  <Default :menu="ContentTask" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentTask from '../layouts/contents/Task/ContentTask.vue';

const subMenus = [
  {
    id: 1,
    name: 'Tarefas',
    router: '/tarefas'
  }
];

</script>
