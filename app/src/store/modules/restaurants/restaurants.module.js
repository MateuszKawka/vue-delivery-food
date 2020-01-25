import {SET_RESTUARANTS_LIST} from "./restaurants-mutations.types";
import {GET_RESTAURANTS_LIST} from "./restaurants-actions.types";

const state = {
	restuarantsList: []
}

const getters = {
	filteredRestaurants() {
		return state.restuarantsList
	}
}

const mutations = {
	[SET_RESTUARANTS_LIST]: (state, restaurantsList) => state.restuarantsList = restaurantsList
}

const actions = {
	[GET_RESTAURANTS_LIST]: async ({commit}) => {
		await commit(SET_RESTUARANTS_LIST, mockRestaurantsList)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

const mockRestaurantsList = [
	{
		name: 'McDonald',
		address: 'Grunwaldzka 249',
		image: 'https://cdn.galleries.smcloud.net/t/galleries/gf-1y8X-q6rp-7H9N_mcdonalds-przyjedzie-do-ciebie-664x442-nocrop.jpg',
		id: '1337',
		types: ['fastFood', 'american', 'burger'],  // max 7
		rating: 4.7
	},
	{
		name: 'Burger King',
		address: 'Grunwaldzka 248',
		image: 'https://pliki.portalspozywczy.pl/i/07/02/40/070240_r0_940.jpg',
		id: '2137',
		types: ['fastFood', 'american', 'burger'],  // max 7
		rating: 4.3
	}
]