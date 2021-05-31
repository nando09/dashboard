<template>
    <div>
        <component :is="icon" class="w-4 h-4"/>
    </div>
</template>
<script lang="ts" setup>
// import EmployeeIcon from '../../../components/icons/MenuAside/EmployeeIcon.vue';
// import GoalIcon from '../../../components/icons/MenuAside/GoalIcon.vue';
// import HomeIcon from '../../../components/icons/MenuAside/HomeIcon.vue';
// import PlanIcon from '../../../components/icons/MenuAside/PlanIcon.vue';
// import ProductIcon from '../../../components/icons/MenuAside/ProductIcon.vue';
// import SettingsIcon from '../../../components/icons/MenuAside/SettingsIcon.vue';
// import SupplierIcon from '../../../components/icons/MenuAside/SupplierIcon.vue';

import { defineProps } from 'vue'
defineProps({
    icon: {
        default: null
    }
})
</script>
