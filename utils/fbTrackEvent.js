import React from 'react'

const fbTrackEvent = (event, data = null) => {
  if (typeof fbq === 'function') {
    fbq('track', event, data)
    return true
  }
  return false
}

export default fbTrackEvent
