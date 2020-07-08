<template>
  <main class="bg-gray-200">
    <div class="max-w-3xl mx-auto py-12 min-h-screen bg-white shadow rounded"
      v-editable="blok">
      <h1 class="mb-10 text-center font-bold text-2xl">{{ blok.headline }}</h1>
      <GamesPreview :blok="blok"/>
    </div>
  </main>
</template>

<script>
import GamesPreview from '~/components/GamesPreview'

export default {
  components: {
    GamesPreview
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
