<template>
  <Default :menu="ContentGraphics" :subMenus="subMenus"/>
</template>

<script setup>
const subMenus = [
  {
    id: 1,
    name: 'Usuários',
    router: '/ajustes'
  },
  {
    id: 2,
    name: 'Perfil',
    router: '/ajustes/perfis'
  },
  {
    id: 3,
    name: 'Gráficos',
    router: '/ajustes/graficos'
  }
];

import Default from '../components/Default.vue';
import ContentGraphics from '../layouts/contents/Settings/ContentGraphics.vue';
</script>