const state = {
    userId: '',
    userName: '',
    firstName: '',
    lastName: '',
    token: ''
}

const getters = {
    userId: state => {
        return state.userId;
    },
    userName: state => {
        return state.userName;
    },
    firstName: state => {
        return state.firstName;
    },
    lastName: state => {
        return state.userId;
    },
    token: state => {
        return state.token
    }
}

const mutations = {
    userId: (state, userId) => {
        state.userId = userId;
    },
    userName: (state, userName) => {
        state.userName = userName;
    },
    firstName: (state, firstName) => {
        state.firstName = firstName;
    },
    lastName: (state, lastName) => {
        state.lastName = lastName;
    },
    token: (state, token) => {
        state.token = token;
    }
}

const actions = {
    setUser: ({ commit }, payload) => {
        commit('userName', payload.userName);
        commit('firstName', payload.firstName);
        commit('lastName', payload.lastName);
        commit('userId', payload.userId);
        commit('token', payload.token);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}