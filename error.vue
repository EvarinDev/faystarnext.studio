<script setup lang="ts">
import type { NuxtError } from '@nuxt/types'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>


<template>
    <Navbar />
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <h1 class="text-4xl mb-4">{{ error.statusCode }}</h1>
      <router-link to="/" class="text-blue-700 dark:text-white">Back to Home</router-link>
    </div>
  </template>