<template>
  <Default :menu="ContentGoal" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentGoal from '../layouts/contents/Goal/ContentGoal.vue';

const subMenus = [
  {
    id: 1,
    name: 'Metas',
    router: '/metas'
  }
];

</script>