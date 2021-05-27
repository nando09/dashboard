<template>
    <div class="relative">
        <input type="text" class="w-full bg-gray-700 placeholder-white px-2 py-1 rounded-lg opacity-30 focus:opacity-60 outline-none focus:outline-none pr-10" placeholder="Search">
        <SearchIcon class="w-4 h-4 absolute top-2 right-2" />
    </div>
</template>
<script lang="ts" setup>
import SearchIcon from '../icons/SearchIcon.vue'
</script>