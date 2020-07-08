<template>
  <div>
    <ul class="flex flex-wrap py-6 mb-6">
      <li
        v-for="game in games" :key="game._uid"
        class="p-6" style="min-width: 33%">
        <game
          v-if="game.content"
          :blok="game.content"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    games() {
      // Load reference data/content from store
      return this.$store.state.games.games
    }
  }
}
</script>

<style>

</style>
