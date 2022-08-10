import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
/**
 * 获取token,可以自定义key
 * @param {*} key
 * @returns
 */
export const getToken = (key = TokenKey) => Cookies.get(key)

/**
 * 设置token,可以自定义key
 * @param {*} value
 * @param {*} key
 * @returns
 */
export const setToken = (value, key = TokenKey) => Cookies.set(key, value)

/**
 * 移除token,可以自定义key
 * @param {*} key
 * @returns
 */
export const removeToken = (key = TokenKey) =>  Cookies.remove(key)
