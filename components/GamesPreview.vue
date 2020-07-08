<template>
  <div>
    <p v-if="$fetchState.pending">
      Loading games...
    </p>
    <p v-else-if="$fetchState.error">
      Error occured by loading games
    </p>
    <ul
      v-else
      class="flex flex-wrap py-6 mb-6">
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
  data () {
    return {
      games: []
    }
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  async fetch() {
    let fetchedGames = await this.$storyapi.get(`cdn/stories/`,
        {
          starts_with: 'games/',
          version: 'draft',
          filter_query: {
            live: {
              in: `${this.blok.live}`
            },
            featured: {
              in: `${this.blok.featured}`
            },
            category: {
              in: `${this.blok.category.toString()}`
            },
            client_group: {
              in_array: `${this.blok.client_group.toString()}`
            }
          }
        }
      )

    this.games = fetchedGames.data.stories
  },
  fetchOnServer: false,
}
</script>

<style>

</style>
