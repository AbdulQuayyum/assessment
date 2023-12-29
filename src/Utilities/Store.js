import { createStore } from 'vuex'

export default createStore({
    state: {
        isSidebarVisible: false,
    },
    mutations: {
        showSidebar(state) {
            state.isSidebarVisible = true;
        },
        hideSidebar(state) {
            state.isSidebarVisible = false;
        },
    },
    actions: {
        toggleSidebar({ commit, state }) {
            if (state.isSidebarVisible) {
                commit('hideSidebar');
            } else {
                commit('showSidebar');
            }
        },
    },
    getters: {
        isSidebarVisible: (state) => state.isSidebarVisible,
    },
});
