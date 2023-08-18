import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

// Define the initial state

const initialState = [];

const store = createStore({
    plugins: [createPersistedState()],
    // namespaced: true,
    state() {
        return {
            items: initialState
        }
    },
    mutations: {
        add(state, payload){
            state.items.push(payload);
        },
        remove(state, payload) {
            state.items = state.items.filter((item) => item.id !== payload);
        }
    },
    actions: {
        addToCart(context, product) {
            context.commit('add', product);
        },
        removeFromCart(context, productId){
            context.commit('remove', productId);
        }
    }
});

export default store;