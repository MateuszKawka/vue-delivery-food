import {
	SET_FILTERS,
	REMOVE_ALL_FILTERS,
	REMOVE_FILTER
} from "./filters-mutations.types";

const state = {
	activeFilters: []
}

const getters = {

}

const mutations = {
	[SET_FILTERS]: (state, filters) => state.activeFilters = filters,
	[REMOVE_FILTER]: (state, filterIndex) => state.activeFilters.splice(filterIndex, 1)
}

const actions = {

}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}