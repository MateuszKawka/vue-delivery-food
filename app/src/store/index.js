import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/filters/filters.module'
import restaurants from './modules/restaurants/restaurants.module'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMenu: false
  },
  mutations: {
    menuBind: state => state.showMenu = !state.showMenu
  },
  actions: {
  },
  modules: {
    filters: filters,
    restaurants: restaurants
  }
})
