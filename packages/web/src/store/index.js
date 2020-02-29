import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: sessionStorage.getItem('userId') || ''
  },
  mutations: {
    setUser: (state, value) => {
      state.userId = value
      sessionStorage.setItem('userId', value)
    },
    clearUser: (state) => {
      state.userId = ''
      sessionStorage.removeItem('userId')
    }
  },
  getters: {
    initalized: state => !!state.userId
  },
  actions: {
  }
})
