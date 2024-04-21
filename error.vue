<script setup lang="ts">
import type { NuxtError } from '@nuxt/types'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>


<template>
  <div>
    <div class="dark:bg-neutral-800 text-white" :style="{
      background: `linear-gradient(rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.2)), url(https://cdn.rlss.in.th/assets/img/BackGround.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }">
      <div class="flex flex-col items-center justify-center h-screen text-center">
        <h1 class="text-2xl Trushdex-font ">{{ error?.statusCode }}</h1>
        <p class="text-lg">{{ error?.message }}</p>
      </div>
    </div>
  </div>
</template>
