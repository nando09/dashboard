<template>
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
        @click="$emit('close')"
        >
        Cancelar
        </button>
    </div>
</template>
<script lang="ts" setup>
    const nome = '';
    const sobrenome = '';
    const senha = '';
    const email = '';
    const usuario = '';
    const perfil = '';

    function cadastrar(){
        let data = {
            nome:       nome,
            sobrenome:  sobrenome,
            senha:      senha,
            email:      email,
            usuario:    usuario,
            perfil:     perfil            
        };

        $root.$emit('input', data);
    }
</script>