<template>
    <div class="grid grid-rows-6">
        <div class="grid grid-rows-2 row-span-1">
            <div class="row-span-1 bg-orange-200 w-full flex justify-center items-center uppercase font-bold text-orange-600 rounded-br-xl">
                Stock<span class=" opacity-50">ys</span>
            </div>
        </div>
        <div class="row-span-5 text-orange-600 flex flex-col justify-around text-center pb-10">
            <div v-for="menu in menus" :key="menu.id">
                <router-link :to="menu.router" class=" border-2 border-orange-600 p-2 rounded-xl"><font-awesome-icon :icon="menu.name" /></router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import EmployeeIcon from '../../components/icons/MenuAside/EmployeeIcon.vue';
import GoalIcon from '../../components/icons/MenuAside/GoalIcon.vue';
import HomeIcon from '../../components/icons/MenuAside/HomeIcon.vue';
import PlanIcon from '../../components/icons/MenuAside/PlanIcon.vue';
import ProductIcon from '../../components/icons/MenuAside/ProductIcon.vue';
import SettingsIcon from '../../components/icons/MenuAside/SettingsIcon.vue';
import SupplierIcon from '../../components/icons/MenuAside/SupplierIcon.vue';

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