import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentPage: 0,
  items: []
}

const getters = {
  sortedItems ({ items }) {
    return items.slice().sort()
  }
}

const mutations = {
  SET_CURRENT_PAGE (state, payload) {
    console.log('TCL: SET_CURRENT_PAGE -> state', state)
    state.currentPage = payload.currentPage
  },

  SET_ITEMS (state, payload) {
    state.items = payload.items
  }
}

const actions = {
  changeCurrentPage ({ commit, state }, payload) {
    console.log('TCL: changeCurrentPage -> state', state)
    console.log('TCL: changeCurrentPage -> payload', payload)
    commit('SET_CURRENT_PAGE', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
