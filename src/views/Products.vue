<template>
  <Default :menu="ContentProduct" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentProduct from '../layouts/contents/Product/ContentProduct.vue';

const subMenus = [
  {
    id: 1,
    name: 'Produtos',
    router: '/produtos'
  }
];

</script>