import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

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

const mutations = make.mutations(state)

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
