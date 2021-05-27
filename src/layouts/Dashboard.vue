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
        <div class="border-2 border-red-500 flex-1">
            <header>
                <InputSearch />
                <!-- <Dropdown>
                    <Avatar />
                </Dropdown>
                <Notifications /> -->
            </header>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import HomeIcon from '../components/icons/HomeIcon.vue'
    import TrendingUpIcon from '../components/icons/TrendingUpIcon.vue'
    import MenuItem from './navs/MenuItem.vue'
</script>
