<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="max-w-7l mx-auto">
      <nav class="m2 p-2">
        <RouterLink
          class="px-4 py-2 mr-4 bg-indigo-600 rounded text-white"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="px-4 py-2 mr-4 bg-indigo-600 rounded text-white"
          to="/produtos"
          >Produtos</RouterLink
        >
      </nav>
    </div>
  </header>

  <main class="max-w-7l mx-auto min-h-scren">
    <RouterView />
  </main>
</template>

