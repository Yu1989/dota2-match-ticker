/**
 * Util to manipulate browser cookies
 */

export default {
  set (name, value) {
    const exp = new Date()
    exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
  },

  get (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(reg)

    return arr ? unescape(arr[2]) : null
  }
}
