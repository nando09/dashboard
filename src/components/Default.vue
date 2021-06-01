<template>
  <div class="grid grid-rows-6 grid-cols-12 h-screen">
    <div class="col-span-12 grid grid-rows-2">
      <Top class="row-span-1" />
      <div class="row-span-1 grid grid-cols-12">
        <Aside :subMenus="subMenus" />
      </div>
    </div>
    <component :is="menu" class="row-span-5 col-span-12 overflow-y-auto px-10"/>
  </div>
</template>
<script lang="ts" setup>
import Top from '../layouts/navs/Top.vue';
import Aside from '../layouts/navs/Aside.vue';

import { defineProps } from 'vue'
defineProps({
    menu: {
        default: null
    },
    subMenus: {
      default: []
    }
})


</script>