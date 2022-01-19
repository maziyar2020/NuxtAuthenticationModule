export const state = () => ({
    currentComponent: "LoginForm",
    loggedIn: null,
    accessToken: "",
    refreshToken: ""
});

export const getters = {
    currentComponent: state => state.currentComponent,
    userLoggedIn: state => state.loggedIn
};

export const mutations = {
    HANDLE_CHANGE_lOGIN_FORM(state, componentName) {
        state.currentComponent = componentName;
    },
    HANDLE_LOG_IN_USER(state) {
        state.loggedIn = true;
    },
    HANDLE_LOG_OUT_USER(state) {
        state.accessToken = "";
        state.refreshToken = "";
        state.loggedIn = false;
        state.refreshToken = null;

        this.$cookies.remove("userRefreshToken");
        this.$cookies.remove("userAccessToken");

        this.$router.go()
    }
};

export const actions = {
    handleChangeLoginForm({ commit }, componentName) {
        commit("HANDLE_CHANGE_lOGIN_FORM", componentName);
    },
    handleLogInUser({ commit }) {
        commit("HANDLE_LOG_IN_USER");
    },
    handleLogOutUser({ commit }) {
        commit("HANDLE_LOG_OUT_USER");
    },
};