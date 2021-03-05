// state
export const state = () => ({
  drawer: true,
})

// mutations
export const mutations = {
  setDrawer: (state, value) => (state.drawer = value),
}
