<template>
  <div class="bg-black bg-opacity-20 rounded-3xl overflow-hidden">
    <div class="header">
      <div class="h-32 flex">
        <img
          src="https://via.placeholder.com/800X600"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <div class="body relative p-5">
      <Avatar
        class="w-12 h-12 rounded-full overflow-hidden absolute right-0 -top-5"
      />
      <h5 class="mb-2 text-xs opacity-50">
        Andy Willian
        <div class="w-2 h-2 ml-2 inline-block rounded-full bg-green-400"></div>
      </h5>
      <h4>Basic how to ride your skateboard comfortly</h4>
      <div class="text-xs flex items-center space-x-2 opacity-50 mt-3">
        <span>53k Views</span>
        <div class="w-1 h-1 rounded-full bg-gray-300"></div>
        <span>2 weeks ago</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Avatar from "./Avatar.vue";
</script>

