// Placeholder for toast functionality
import { useState } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description }) => {
    setToasts((prevToasts) => [...prevToasts, { title, description }])
  }

  return { toast, toasts }
}