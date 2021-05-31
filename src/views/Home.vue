<template>
  <div class="grid grid-rows-6 grid-cols-12 h-screen">
    <Aside class="row-span-6 col-span-1 h-full"/>
    <div class="col-span-11 grid grid-rows-2">
      <Top class="row-span-1" />
      <div class="row-span-1">
        <h1 class="h-full font-semibold uppercase flex items-center justify-center">Testando</h1>
      </div>
    </div>
    <ContentHome class="row-span-5 col-span-11"/>
  </div>


  <div class="grid grid-flow-col">
  </div>
</template>

<script setup>
import Top from '../layouts/navs/Top.vue';
import Aside from '../layouts/navs/Aside.vue';
import ContentHome from '../layouts/contents/ContentHome.vue';
</script>