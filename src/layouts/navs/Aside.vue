<template>
    <div class="col-span-1">
        <div class="h-full w-full menu-aside-button transition duration-700">
        <div class="w-full h-full flex flex-col-reverse items-center justify-center relative menu-hamburguer">
            <div class="w-1/4 h-1 rounded bg-orange-400 mt-1"></div>
            <div class="w-1/4 h-1 rounded bg-orange-400 mt-1"></div>
            <div class="w-1/4 h-1 rounded bg-orange-400"></div>
        </div>
        <div class="flex flex-col-reverse items-center relative invisible menu-aside-hidden transition-all duration-700 transform origin-top scale-50">
            <div class=" text-orange-600 absolute top-0 bg-orange-100 bg-opacity-70 rounded-xl">
                <div v-for="menu in menus" :key="menu.id" class="m-7">
                    <router-link :to="menu.router" class="border-2 border-orange-600 p-2 rounded-xl"><font-awesome-icon :icon="menu.name" /></router-link>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="col-span-11">
        <h1 class="h-full font-semibold uppercase flex items-center justify-center">Testando</h1>
    </div>
</template>
<script lang="ts" setup>
// import MenusAside from '../contents/Aside/Menus.vue'

const menus = [
    {
        id: 1,
        name: 'home',
        router: '/'
    },
    {
        id: 2,
        name: 'chart-line',
        router: '/goal'
    },
    {
        id: 3,
        name: 'tasks',
        router: '/plan'
    },
    {
        id: 4,
        name: 'people-arrows',
        router: '/product'
    },
    {
        id: 5,
        name: 'parachute-box',
        router: '/setting'
    },
    {
        id: 6,
        name: 'cubes',
        router: '/users'
    },
    {
        id: 7,
        name: 'users',
        router: '/suplier'
    },
    {
        id: 8,
        name: 'sliders-h',
        router: '/parachute'
    }
];
</script>