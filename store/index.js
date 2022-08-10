export const state = () => ({
    isLogin: false,
})

export const mutations = {
    SET_IS_LOGIN(state, payload) {
        state.isLogin = payload
    },
}
