<template>
  <div
    class="relative border border-gray-600 rounded text-left">
    <img :src="blok.image.filename" alt="">
    <p
      class="absolute right-0 top-0 px-2 py-1 bg-gray-600 text-white text-sm tight"
      v-if="blok.highlighted">HIGHLIGHT</p>
    <div class="px-4 py-2">
      <h2 class="text-xl font-bold mb-3">{{ blok.headline }}</h2>
      <p class="pb-4">{{ blok.catch_phrase }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
