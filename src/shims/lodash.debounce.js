// Lightweight debounce drop-in to avoid ESM interop issues with lodash.debounce
// Matches the common signature: debounce(fn, wait, { leading = false, trailing = true, maxWait })
export default function debounce(func, wait = 0, options = {}) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

  let timerId = null
  let lastCallTime = 0
  let lastInvokeTime = 0
  let lastArgs
  let lastThis

  const leading = options.leading === true
  const trailing = options.trailing !== false
  const maxWait = typeof options.maxWait === 'number' ? Math.max(options.maxWait, wait) : null

  function invoke(time) {
    lastInvokeTime = time
    const result = func.apply(lastThis, lastArgs)
    lastArgs = lastThis = null
    return result
  }

  function startTimer(pendingFunc, delay) {
    timerId = setTimeout(pendingFunc, delay)
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall
    return maxWait != null ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait != null && timeSinceLastInvoke >= maxWait)
    )
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      if (trailing && lastArgs) return trailingEdge(time)
      timerId && clearTimeout(timerId)
      timerId = null
    } else {
      startTimer(timerExpired, remainingWait(time))
    }
  }

  function leadingEdge(time) {
    lastInvokeTime = time
    if (leading) invoke(time)
    startTimer(timerExpired, wait)
  }

  function trailingEdge(time) {
    timerId = null
    if (trailing && lastArgs) return invoke(time)
    lastArgs = lastThis = null
    return undefined
  }

  function cancel() {
    if (timerId) clearTimeout(timerId)
    lastInvokeTime = 0
    timerId = lastArgs = lastThis = lastCallTime = 0
  }

  function flush() {
    return timerId === null ? undefined : trailingEdge(Date.now())
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)
    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === null) {
        leadingEdge(time)
      } else if (maxWait != null) {
        startTimer(timerExpired, remainingWait(time))
        return invoke(time)
      }
    }

    if (timerId === null) {
      startTimer(timerExpired, wait)
    }
    return undefined
  }

  debounced.cancel = cancel
  debounced.flush = flush
  return debounced
}
