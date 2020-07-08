<template>
  <main class="bg-gray-200">
    <div class="max-w-2xl mx-auto py-12 min-h-screen">
      <h1 class="mb-10 text-center font-bold text-2xl">Banner Personalisation via API</h1>
      <h2 class="italic text-lg">Rules Setup</h2>
      <form class="px-6 py-6 mb-6 shadow-lg text-center rounded bg-white">
        <div class="mb-4">
          <label>Country: </label>
          <select class="px-2 py-1 border hover:border-gray-600 rounded" v-model="selectedCountry">
            <option disabled value="">Please select one</option>
            <option v-for="option in countries" :key="option.text" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label>Sport: </label>
          <select class="px-2 py-1 border hover:border-gray-600 rounded" v-model="selectedSport">
            <option disabled value="">Please select one</option>
            <option v-for="option in sports" :key="option.text" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="mb-8">
          <label>Club: </label>
          <select class="px-2 py-1 border hover:border-gray-600 rounded" v-model="selectedClub">
            <option disabled value="">Please select one</option>
            <option v-for="option in clubs" :key="option.text" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <button
          class="px-8 py-2 mx-auto border hover:border-gray-600 rounded shadow"
          @click.prevent="loadBanner">
          Load Banner
        </button>
      </form>
      <h2 class="italic text-lg">Banner Preview</h2>
      <div class="px-6 py-6 shadow-lg text-center rounded bg-white">
        <p v-if="stories.length === 0 " class="text-center italic">No banner found. Please change the ruleset.</p>
        <ul v-else>
          <li
            class="block mb-4"
            v-for="banner in stories" :key="banner.id">
            <banner :blok="banner.content"/>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  data () {
    return {
      stories: [],
      countries: [
        { text: 'England', value: 'england' },
        { text: 'Germany', value: 'germany' },
        { text: 'Austria', value: 'austria' }
      ],
      selectedCountry: '',
      sports: [
        { text: 'Golf', value: 'golf' },
        { text: 'Footbal', value: 'footbal' },
        { text: 'Rugby', value: 'rugby' },
        { text: 'Tennis', value: 'tennis' }
      ],
      selectedSport: '',
      clubs: [
        { text: 'FC Red Bull Salzburg', value: 'salzburg' },
        { text: 'FK Austria Wien', value: 'Wien' },
        { text: 'LASK Linz', value: 'Linz' }
      ],
      selectedClub: ''
    }
  },
  asyncData (context) {
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get(`cdn/stories/`, {
      version: 'draft',
      starts_with: "banners/",
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
      } else {
        console.error(res.response.data)
      }
    })
  },
  methods: {
    loadBanner() {
      console.log('clicked');

      return this.$storyapi.get(`cdn/stories/`, {
        version: 'draft',
        starts_with: "banners/",
        per_page: 1,
        filter_query: {
          country: {
            like: `${this.selectedCountry}*`
          },
          favorite_club: {
            like: `${this.selectedClub}*`
          },
          sports: {
            in_array: `${this.selectedSport}`
          }
        }
      }).then((res) => {
        this.stories = res.data.stories
      }).catch((res) => {
        if (!res.response) {
          console.error(res)
        } else {
          console.error(res.response.data)
        }
      })
    }
  }
}
</script>
