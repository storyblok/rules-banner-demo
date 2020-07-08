<template>
  <a
    class="inline-block"
    :href="blok.link.url">
    <img
      class="block rounded"
      :src="blok.cover_image.filename" alt="">
  </a>
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
