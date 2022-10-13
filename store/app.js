export const state = () => ({
    isLogin: false,
    userInfo: null,
})

export const mutations = {
    SET_IS_LOGIN(state, payload) {
        state.isLogin = payload
    },
    SET_USER_INFO(state, payload) {
        state.isLogin = payload
    },
}
