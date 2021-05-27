<template>
    <div class="bg-gray-800 flex text-white max-h-screen h-screen">
        <div class="w-64">
            <span class="font-semibold p-6 block opacity-90">Skate</span>
            <nav class="p-6">
                <h3 class="opacity-50 uppercase font-semibold tracking-widest text-xs mb-6">Menu</h3>
                <div class="space-y-6">
                    <MenuItem :icon="HomeIcon">Discover</MenuItem>
                    <MenuItem :icon="TrendingUpIcon">Trending</MenuItem>
                    <MenuItem :icon="TrendingUpIcon">Trending</MenuItem>
                    <MenuItem :icon="TrendingUpIcon">Trending</MenuItem>
                    <MenuItem :icon="TrendingUpIcon">Trending</MenuItem>
                    <MenuItem :icon="TrendingUpIcon">Trending</MenuItem>
                </div>
            </nav>
        </div>
        <div class="p-4 flex-1">
            <header class="flex items-center justify-between">
                <InputSearch class="w-96"/>
                <div class="flex items-center">
                    <div class="flex items-center space-x-3">
                        <Avatar class="w-10"/>
                        <span>Thomas</span>
                        <ChevronDownIcon class="w-4 h-4"/>
                    </div>
                    <BellIcon class="w-5 h-5 ml-8 opacity-50 hover:opacity-100 cursor-pointer transition duration-100"/>
                </div>
            </header>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import HomeIcon from '../components/icons/HomeIcon.vue'
    import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue'
    import BellIcon from '../components/icons/BellIcon.vue'
    import ChevronDownIcon from '../components/icons/ChevronDownIcon.vue'
    import MenuItem from './navs/MenuItem.vue'
    import InputSearch from '../components/input/InputSearch.vue'
    import Avatar from '../components/Avatar.vue'
</script>
