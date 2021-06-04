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
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="profile in listPerfilCurrentPage">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ profile.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <button @click="editUserModal(profile)" class=" bg-orange-300 p-1 rounded text-yellow-800 mr-2 focus:outline-none">Editar</button>
                                    <button @click="routersModal(profile)" class=" bg-blue-300 p-1 rounded text-blue-800 mr-2 focus:outline-none">Acesso</button>
                                    <button @click="deleteUserModal(profile)" class=" bg-red-300 p-1 rounded text-red-800 focus:outline-none">Apagar</button>
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
                                <div class="w-full px-3">
                                    <input type="hidden" class="invisible" v-model="id">
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
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-around">
                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                            @click="cadastrar"
                            v-if="id == 0"
                            >
                            Cadastrar
                            </button>

                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                            @click="atualizar"
                            v-else
                            >
                            Atualizar
                            </button>

                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
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

        <TransitionRoot appear :show="isDelete" as="template">
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
                        <div class="p-6 bg-white rounded-2xl text-center">
                            Tem certeza que deseja <span class="font-bold text-red-600">deletar</span>,
                            <br>
                            <span class="font-bold">{{ nome }} {{ sobrenome }} ?</span>
                        </div>
                        <div class="flex justify-center">
                            <button
                            type="button"
                            class="inline-flex mr-2 justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                            @click="deleteUser"
                            >
                            Deletar
                            </button>
                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
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

        <TransitionRoot appear :show="isRouters" as="template">
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
                        <p class="font-bold p-2 text-center">{{ nome }}</p>
                        <div class="p-2 mb-4">
                            <Disclosure v-slot="{ open }">
                                <DisclosureButton
                                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                                >
                                <span>What is your refund policy?</span>
                                </DisclosureButton>
                                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If you're unhappy with your purchase for any reason, email us within
                                90 days and we'll refund you in full, no questions asked.
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                <DisclosureButton
                                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-900 bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                                >
                                <span>Do you offer technical support?</span>
                                </DisclosureButton>
                                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                No.
                                </DisclosurePanel>
                            </Disclosure>

                        </div>
                        <div class="flex justify-around">
                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                            @click="routersProfile"
                            >
                            Vincular
                            </button>

                            <button
                            type="button"
                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
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
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    } from '@headlessui/vue'
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'


    const listNow = ref(5);
    const pagInit = ref(0);
    const pagEnd = ref(5);
    const currentPage = ref(1);
    const pageQuantity = ref(0);

    const id = ref('');
    const nome = ref('');

    const isOpen = ref(false);
    const isDelete = ref(false);
    const isRouters = ref(false);

    const listAll = ref(0);
    const listPerfilCurrentPage = ref([]);
    const evenNumbersSelect = ref([]);
    const listPerfil = ref([]);
    const listPerfilAll = ref([]);
    const profileSelected = ref('Todos');
    const nameSearch = ref('');

    const routers = ref([
        {
            id: 1,
            name: 'Home',
            submenus: [
                {
                    id: 1,
                    name: 'Dashboard'
                },
                {
                    id: 2,
                    name: 'Relatorios'
                }
            ]
        },
        {
            id: 2,
            name: 'Metas',
            submenus: [
                {
                    id: 3,
                    name: 'Cadastro e Edição'
                },
                {
                    id: 4,
                    name: 'Delete'
                },
                {
                    id: 5,
                    name: 'Solo'
                },
                {
                    id: 6,
                    name: 'Todos'
                }
            ]
        },
        {
            id: 3,
            name: 'Projetos',
            submenus: [{
                {
                    id: 7,
                    name: 'Cadastro e Edição'
                },
                {
                    id: 8,
                    name: 'Delete'
                },
                {
                    id: 9,
                    name: 'Solo'
                },
                {
                    id: 10,
                    name: 'Todos'
                }
            }]
        },
        {
            id: 4,
            name: 'Clientes',
            submenus: [{
                {
                    id: 11,
                    name: 'Cadastro e Edição'
                },
                {
                    id: 12,
                    name: 'Delete'
                },
                {
                    id: 13,
                    name: 'Clientes'
                },
                {
                    id: 14,
                    name: 'Metas'
                },
                {
                    id: 15,
                    name: 'Provaveis'
                }
            }]
        },
        {
            id: 5,
            name: 'Fornecedores',
            submenus: [{

            }]
        },
        {
            id: 6,
            name: 'Produtos',
            submenus: [{

            }]
        },
        {
            id: 7,
            name: 'Funcionarios',
            submenus: [{

            }]
        },
        {
            id: 8,
            name: 'Ajustes',
            submenus: [{

            }]
        }
    ])

    const routersModal = (user: {}) => {
        id.value = user.id;
        nome.value = user.name;

        isRouters.value = true;
    }

    const editUserModal = (user: {}) => {
        id.value = user.id;
        nome.value = user.name;

        isOpen.value = true;
    };

    const deleteUserModal = (user: any) => {
        id.value = user.id;
        nome.value = user.name;

        isDelete.value = true;
    };

    const editUser = (user: {}) => {
        console.log(id);
    };

    const deleteUser = (user: {}) => {
        createToast({
            title: 'Deletado,',
            description: 'com sucesso!'
        },
        {
            timeout: 2000,
            transition: 'slide',
            type: 'success',
            position: 'top-right'
        })

        isDelete.value = false;
    };


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

    const searchNome = (event: string) => {
        nameSearch.value = event;
        const arr = [];
        currentPage.value = 1;
        for (var i = 0; i < listPerfilAll.value.length; i++) {
            if((listPerfilAll.value[i].name.toLowerCase().indexOf(event.toLowerCase()) >= 0)) {
                arr.push(listPerfilAll.value[i]);
            }
        }

        listPerfil.value = arr;
        listAll.value = listPerfil.value.length;
        evenNumbers();
    }

    onMounted(() => {
        profiles();

        listPerfilCurrentPage.value = listPerfil.value;
        listPerfilAll.value = listPerfil.value;
        listAll.value = listPerfilCurrentPage.value.length;
        selectQuantity();
        evenNumbers();
    })

    const profiles = () => {
        listPerfil.value = [
            {
                id: 1,
                name: 'Admin'
            },
            {
                id: 2,
                name: 'Analista'
            },
            {
                id: 3,
                name: 'Produção'
            },
            {
                id: 4,
                name: 'Locultor'
            },
            {
                id: 5,
                name: 'Jornal'
            },
            {
                id: 6,
                name: 'Cantor'
            },
            {
                id: 7,
                name: 'Comentarista'
            },
            {
                id: 8,
                name: 'Lider'
            },
            {
                id: 9,
                name: 'Coach'
            },
            {
                id: 10,
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
            arr.push(listPerfil.value[i - 1]);
        }

        console.log(arr);

        listPerfilCurrentPage.value = arr;
    }

    const atualizar = () => {
        let data = {
            id:         id.value,
            nome:       nome.value,
        };

        createToast({
            title: 'Atualizado,',
            description: 'com sucesso!'
        },
        {
            timeout: 2000,
            transition: 'slide',
            type: 'success',
            position: 'top-right'
        })
        isOpen.value = false;
    }


    const cadastrar = () => {
        let data = {
            nome:       nome.value
        };

        isOpen.value = false;

        createToast({
            title: 'Cadastrado,',
            description: 'com sucesso!'
        },
        {
            timeout: 2000,
            transition: 'slide',
            type: 'success',
            position: 'top-right'
        })
    }

    const routersProfile = () => {
        let data = {
            id:         id.value,
            senha:      senha.value
        };

        console.log(data);

        createToast({
            title: 'Senha atualizada,',
            description: 'com sucesso!'
        },
        {
            timeout: 2000,
            transition: 'slide',
            type: 'success',
            position: 'top-right'
        })
    }

    const closeModal = () => {
        isOpen.value = false;
        isDelete.value = false;
        isRouters.value = false;
    }

    const openModal = () => {
        id.value = '';
        nome.value = '';

        isOpen.value = true;
    }
</script>
