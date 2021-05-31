<template>
    <div class="flex items-center">
        <input
        class="text-white rounded-lg bg-orange-700 placeholder-white p-2 opacity-20 focus:opacity-40 outline-none focus:outline-none pr-10"
        id="search"
        type="text"
        placeholder="Pesquisar..."
        />

        <div>
        <button
            class="text-white p-2 focus:outline-none flex items-center justify-center"
        >
            <SearchIcon  class="h-5 w-5 mr-2 text-orange-700 opacity-25 hover:opacity-80" />
        </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import SearchIcon from '../../../components/icons/SearchIcon.vue'
</script>