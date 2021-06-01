<template>
  <Default :menu="ContentSetting" :subMenus="subMenus"/>
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
import ContentSetting from '../layouts/contents/Settings/ContentSetting.vue';
</script>