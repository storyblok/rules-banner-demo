export const state = () => ({
  games: [],
  loaded: '0',
})

export const mutations = {
  setGames (state, entries) {
    state.games = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}
