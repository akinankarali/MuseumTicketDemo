import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    search: ''
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    updateProducts(state, payload) {
      state.products = payload
    },
    setProducts(state, data) {
      state.products = data
    },
    setSearch(state, payload) {
      state.search = payload
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await axios.get(
        'https://sandbox.musement.com/api/v3/events'
      )
      commit('setProducts', products.data)
    }
  }
})
