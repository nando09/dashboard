<template>
  <div class="w-full bg-orange-300 grid grid-cols-10">
    <div class="col-span-1 justify-items-end">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-5 w-5 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <div class="col-span-6">
      <input
        class="w-full text-white bg-orange-700 placeholder-white p-2 rounded-lg opacity-20 focus:opacity-40 outline-none focus:outline-none pr-10"
        type="text"
        placeholder="Search.."
      />
    </div>
    <div class="col-span-1">Mensagem</div>
    <div class="col-span-1">Perfil</div>
    <div class="col-span-1">Menu</div>
  </div>
</template>