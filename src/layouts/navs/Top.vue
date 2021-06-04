<template>
  <div class="w-full grid grid-cols-12 z-10">
    <div class="col-span-1">
        <div class="bg-orange-200 h-full w-full flex justify-center items-center uppercase font-bold text-orange-600 rounded-br-xl">
            Stock<span class=" opacity-50">ys</span>
        </div>
    </div>
    <div class="col-span-9 flex justify-end items-center ">
      <Search />
    </div>
    <div class="col-span-2 flex items-center justify-around">
      <Avatar class="w-10 h-10"/>
      <Notification />
      <MenuTop />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Avatar from '../../components/Avatar.vue'
import Notification from '../contents/Top/Notification.vue'
import MenuTop from '../contents/Top/MenuTop.vue'
import Search from '../../layouts/contents/Top/Search.vue'
</script>
