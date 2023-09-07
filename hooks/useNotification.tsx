import { useState } from 'react'

interface Notification {
  isVisible: boolean
  callNotification: () => void
}

export const useNotification = (): Notification => {
  const [isVisible] = useState(false)
  const callNotification = () => {
    alert('notification hola')
  }

  return {
    isVisible,
    callNotification
  }
}
