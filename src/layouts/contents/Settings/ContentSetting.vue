<template>
    <div class="grid grid-cols-12 grid-rows-6">
        <div class="col-span-12 row-span-6">
            <div class="flex mb-6 relative">
                <div class="flex flex-row sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            v-model="listNow"
                            @change="changeList()"
                        >
                            <option value="5">5</option>
                            <option v-for="valor in evenNumbersSelect" :value="valor" :key="valor">{{valor}}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                            @change="getProfile($event.target.value)"
                        >
                            <option>Todos</option>
                            <option v-for="profile in listPerfil" :key="profile.name">{{ profile.name }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Nome do usuário"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        @keyup="searchNome($event.target.value)"
                    />
                </div>
                <div class='absolute right-0'>
                    <button
                        @click="openModal"
                        class="p-2 bg-orange-400 rounded text-white focus:outline-none"
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
            <div class="">
                <div class="inline-block min-w-full shadow rounded-lg">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Nome
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Perfil
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Inicio
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in usuariosListCurrentPage">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                :src="user.image"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ user.name }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.profile }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ user.created }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                         v-if="user.status"
                                    >
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Activo</span>
                                    </span>
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                                        v-else
                                   >
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Inactive</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            {{pagInit}} - {{ pagEnd }} de {{ listAll }}
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                :disabled="currentPage < 2"
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                @click="prevPage()"
                            >
                                &lt;
                            </button>
                            <button
                                :disabled="pageQuantity <= currentPage"
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                @click="nextPage()"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                <DialogOverlay class="fixed inset-0 bg-black opacity-50" />

                <span class="inline-block h-screen align-middle" aria-hidden="true">
                    &#8203;
                </span>

                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <div class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name"
                                >
                                    Nome
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    v-model="nome"
                                    placeholder="Jane"
                                />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Sobrenome
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    v-model="sobrenome"
                                    placeholder="Doe"
                                />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Senha
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    v-model="senha"
                                    type="password"
                                    placeholder="******************"
                                />
                                <p class="text-gray-600 text-xs italic">
                                    Make it as long and as crazy as you'd like
                                </p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Email
                                </label>
                                <input
                                    v-model="email"
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="password"
                                    placeholder="janedoe@gmail.com"
                                />
                                <p class="text-gray-600 text-xs italic">
                                    Make it as long and as crazy as you'd like
                                </p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Usuário
                                </label>
                                <input
                                    v-model="usuario"
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="password"
                                    placeholder="jone_doe"
                                />
                                <p class="text-gray-600 text-xs italic">
                                    Make it as long and as crazy as you'd like
                                </p>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-state"
                                >
                                    Perfil
                                </label>
                                <div class="relative">
                                    <select
                                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                    v-model="perfil"
                                    >
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                    </select>
                                    <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                    >
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-around">
                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                            @click="cadastrar"
                            >
                            Cadastrar
                            </button>

                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                            @click="closeModal"
                            >
                            Cancelar
                            </button>
                        </div>
                    </div>
                </TransitionChild>
                </div>
            </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script lang="ts" setup>
    import {ref, onMounted, watch} from 'vue';
    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
    } from '@headlessui/vue'

    const listNow = ref(5);
    const pagInit = ref(0);
    const pagEnd = ref(5);
    const currentPage = ref(1);
    const pageQuantity = ref(0);
    const nome = ref('');
    const sobrenome = ref('');
    const senha = ref('');
    const email = ref('');
    const usuario = ref('');
    const perfil = ref('');
    const isOpen = ref(false);
    const usuariosList = ref([
            {
                id: 1,
                name: 'Vera Carpenter',
                profile: 'Admin',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 2,
                name: 'Blake Bowman',
                profile: 'Admin',
                created: '10 Mar, 2021',
                image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 3,
                name: 'Dana Moore',
                profile: 'Analista',
                created: '14 Dez, 2019',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 4,
                name: 'Alonzo Cox',
                profile: 'Produção',
                created: '21 Jan, 2020',
                image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 5,
                name: 'Dante Aliguiere',
                profile: 'Admin',
                created: '2 Ago, 2019',
                image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 6,
                name: 'Vant Neuson',
                profile: 'Produção',
                created: '21 Jan, 2020',
                image: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 7,
                name: 'Silvo Pereira',
                profile: 'Admin',
                created: '14 Fev, 2020',
                image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 8,
                name: 'Danilo Gentili',
                profile: 'Admin',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 9,
                name: 'Murilo Couto',
                profile: 'Admin',
                created: '10 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 10,
                name: 'Leo Lins',
                profile: 'Admin',
                created: '10 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 11,
                name: 'Roger Machado',
                profile: 'Locultor',
                created: '10 Jul, 2020',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 12,
                name: 'Caio Ribeiro',
                profile: 'Jornal',
                created: '28 Out, 2020',
                image: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 13,
                name: 'Cesar Menoti',
                profile: 'Cantor',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1525357816819-392d2380d821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 14,
                name: 'Fabiano',
                profile: 'Cantor',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 15,
                name: 'Vampeta',
                profile: 'Comentarista',
                created: '1 Dez, 2020',
                image: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 16,
                name: 'Cicinho Sp',
                profile: 'Comentarista',
                created: '1 Dez, 2020',
                image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 17,
                name: 'Marcos Borges',
                profile: 'Comentarista',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1599110364758-77334a2b4711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 18,
                name: 'Mano',
                profile: 'Comentarista',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 19,
                name: 'Sombra',
                profile: 'Lider',
                created: '2 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 20,
                name: 'Mourinho',
                profile: 'Coach',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1599110364868-364162848518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 21,
                name: 'Fernando Batista',
                profile: 'Seo',
                created: '1 Jan 2019',
                image: 'data:image/jpeg;base64,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',
                status: 1
            },
            {
                id: 22,
                name: 'Vera Carpenter',
                profile: 'Admin',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 23,
                name: 'Blake Bowman',
                profile: 'Admin',
                created: '10 Mar, 2021',
                image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 24,
                name: 'Dana Moore',
                profile: 'Analista',
                created: '14 Dez, 2019',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 25,
                name: 'Alonzo Cox',
                profile: 'Produção',
                created: '21 Jan, 2020',
                image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 26,
                name: 'Dante Aliguiere',
                profile: 'Admin',
                created: '2 Ago, 2019',
                image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 27,
                name: 'Vant Neuson',
                profile: 'Produção',
                created: '21 Jan, 2020',
                image: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 28,
                name: 'Silvo Pereira',
                profile: 'Admin',
                created: '14 Fev, 2020',
                image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 29,
                name: 'Danilo Gentili',
                profile: 'Admin',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 30,
                name: 'Murilo Couto',
                profile: 'Admin',
                created: '10 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 31,
                name: 'Leo Lins',
                profile: 'Admin',
                created: '10 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 32,
                name: 'Roger Machado',
                profile: 'Locultor',
                created: '10 Jul, 2020',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 33,
                name: 'Caio Ribeiro',
                profile: 'Jornal',
                created: '28 Out, 2020',
                image: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 34,
                name: 'Cesar Menoti',
                profile: 'Cantor',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1525357816819-392d2380d821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 35,
                name: 'Fabiano',
                profile: 'Cantor',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 36,
                name: 'Vampeta',
                profile: 'Comentarista',
                created: '1 Dez, 2020',
                image: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 0
            },
            {
                id: 37,
                name: 'Cicinho Sp',
                profile: 'Comentarista',
                created: '1 Dez, 2020',
                image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 38,
                name: 'Marcos Borges',
                profile: 'Comentarista',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1599110364758-77334a2b4711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 39,
                name: 'Mano',
                profile: 'Comentarista',
                created: '1 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 40,
                name: 'Sombra',
                profile: 'Lider',
                created: '2 Jan, 2019',
                image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 41,
                name: 'Mourinho',
                profile: 'Coach',
                created: '2 Jan, 2021',
                image: 'https://images.unsplash.com/photo-1599110364868-364162848518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
                status: 1
            },
            {
                id: 42,
                name: 'Fernando Batista',
                profile: 'Seo',
                created: '1 Jan 2019',
                image: 'data:image/jpeg;base64,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',
                status: 1
            }
        ]);
    const listAll = ref(usuariosList.value.length);
    const usuariosListCurrent = ref([]);
    const usuariosListCurrentPage = ref([]);
    const evenNumbersSelect = ref([]);
    const listPerfil = ref([]);
    const profileSelected = ref('Todos');
    const nameSearch = ref('');

    const prevPage = () => {
        currentPage.value--;
        evenNumbers();
    }

    const nextPage = () => {
        currentPage.value++;
        evenNumbers();
    }

    const changeList = () => {
        currentPage.value = 1;
        evenNumbers();
    }

    const getProfile = (event: string) => {
        const arr = [];
        profileSelected.value = event;
        currentPage.value = 1;
        for (var i = 0; i < usuariosList.value.length; i++) {
            if((nameSearch.value == '' || (usuariosList.value[i].name.toLowerCase().indexOf(nameSearch.value.toLowerCase()) >= 0)) && ((profileSelected.value == usuariosList.value[i].profile) ||  (profileSelected.value == 'Todos') ) ){
            // if((usuariosList.value[i].profile == event) || (event == 'Todos')){
                arr.push(usuariosList.value[i]);
            }
        }

        usuariosListCurrent.value = arr;
        listAll.value = usuariosListCurrent.value.length;
        console.log(arr);
        evenNumbers();
    }

    const searchNome = (event: string) => {
        nameSearch.value = event;
        const arr = [];
        currentPage.value = 1;
        for (var i = 0; i < usuariosList.value.length; i++) {
            if((usuariosList.value[i].name.toLowerCase().indexOf(event.toLowerCase()) >= 0) && ((profileSelected.value == usuariosList.value[i].profile) ||  (profileSelected.value == 'Todos') ) ){
                arr.push(usuariosList.value[i]);
            }
        }

        usuariosListCurrent.value = arr;
        listAll.value = usuariosListCurrent.value.length;
        evenNumbers();
    }

    onMounted(() => {
        usuariosListCurrent.value = usuariosList.value;

        selectQuantity();
        evenNumbers();
        profiles();
    })

    const profiles = () => {
        listPerfil.value = [
            {
                name: 'Admin'
            },
            {
                name: 'Analista'
            },
            {
                name: 'Produção'
            },
            {
                name: 'Locultor'
            },
            {
                name: 'Jornal'
            },
            {
                name: 'Cantor'
            },
            {
                name: 'Comentarista'
            },
            {
                name: 'Lider'
            },
            {
                name: 'Coach'
            },
            {
                name: 'Seo'
            }
        ];
    }

    const selectQuantity = () => {
        let valor = listAll.value;
        let dividido = 5;
        const arr = [];

        for (var i = 1; i <= 5; i++) {
            dividido = (dividido + dividido);
            if(dividido > valor)
                break;
            arr.push(dividido);
        }

        evenNumbersSelect.value = arr;
    }

    const evenNumbers = () => {
        const arr = [];
        pagEnd.value = (parseInt(currentPage.value) * parseInt(listNow.value));
        pagInit.value = (parseInt(pagEnd.value) - parseInt(listNow.value)) + 1;

        if(listAll.value < pagEnd.value){
            pagEnd.value = listAll.value;
        }
        pageQuantity.value = Math.ceil((listAll.value / listNow.value));

        for (var i = pagInit.value; i <= pagEnd.value; i++) {
            arr.push(usuariosListCurrent.value[i - 1]);
        }

        usuariosListCurrentPage.value = arr;
    }

    const cadastrar = () => {
        let data = {
            nome:       nome.value,
            sobrenome:  sobrenome.value,
            senha:      senha.value,
            email:      email.value,
            usuario:    usuario.value,
            perfil:     perfil.value
        };

        console.log(data);
    }

    const closeModal = () => {
        isOpen.value = false;
    }

    const openModal = () => {
        isOpen.value = true;
    }
</script>
