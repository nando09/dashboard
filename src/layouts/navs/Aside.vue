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
    <div class="col-span-11 flex items-center text-white">
        <router-link :to="menu.router" v-for="menu in subMenus" :key="menu.id" class="p-1 px-4 bg-orange-300 rounded m-2">
            {{ menu.name }}
        </router-link>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    subMenus: {
      default: []
    }
});

const menus = [
    {
        id: 1,
        name: 'home',
        router: '/home'
    },
    {
        id: 2,
        name: 'chart-line',
        router: '/metas'
    },
    {
        id: 3,
        name: 'tasks',
        router: '/tarefas'
    },
    {
        id: 4,
        name: 'people-arrows',
        router: '/clientes'
    },
    {
        id: 5,
        name: 'parachute-box',
        router: '/fornecedor'
    },
    {
        id: 6,
        name: 'cubes',
        router: '/produtos'
    },
    {
        id: 7,
        name: 'users',
        router: '/funcionarios'
    },
    {
        id: 8,
        name: 'sliders-h',
        router: '/ajustes'
    }
];
</script>