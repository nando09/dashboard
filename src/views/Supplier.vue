<template>
  <Default :menu="ContentSupplier" :subMenus="subMenus"/>
</template>

<script setup>
import Default from '../components/Default.vue';
import ContentSupplier from '../layouts/contents/Supplier/ContentSupplier.vue';

const subMenus = [
  {
      id: 1,
      name: 'Fornecedores',
      router: '/fornecedor'
  }
];

</script>