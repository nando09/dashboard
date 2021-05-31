<template>
  <div class="w-full bg-orange-300 grid grid-cols-10">
    <div class="col-span-8 flex justify-end items-center ">
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
