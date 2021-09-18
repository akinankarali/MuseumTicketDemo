import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
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
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const data = await axios.get('https://sandbox.musement.com/api/v3/events')
      commit('setProducts', data)
    }
  }
})
