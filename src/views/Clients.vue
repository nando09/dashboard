<template>
  <Default :menu="ContentClient" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentClient from '../layouts/contents/Client/ContentClient.vue';

const subMenus = [
  {
      id: 1,
      name: 'Clientes',
      router: '/clientes'
  },
  {
      id: 2,
      name: 'Metas',
      router: '/clientes'
  },
  {
      id: 3,
      name: 'Provaveis',
      router: '/clientes'
  }
];

</script>