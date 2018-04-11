export default (window, document) => {
  // easing functions http://goo.gl/5HLl8
  Math.easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
  const requestAnimFrame = (() => {
    const baseAnimationFrame = callback => window.setTimeout(callback, 1000 / 60)

    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    baseAnimationFrame
  })()

  const scrollTo = (to, callback, duration) => {
    const move = amount => window.scrollTo(0, amount)
    const position = () =>
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop

    let start = position()
    let change = to - start
    let currentTime = 0
    let increment = 20

    duration = (typeof (duration) === 'undefined') ? 2000 : duration
    const animateScroll = () => {
      // increment the time
      currentTime += increment
      // find the value with the quadratic in-out easing function
      const val = Math.easeInOutQuad(currentTime, start, change, duration)
      // move the document.body
      move(val)
      // do the animation unless its over
      if (currentTime < duration) {
        requestAnimFrame(animateScroll)
      } else {
        if (callback && typeof (callback) === 'function') {
          // the animation is done so lets callback
          callback()
        }
      }
    }
    animateScroll()
  }

  return scrollTo
}
