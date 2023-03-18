import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import useAuth from '@/hooks/useAuth'

function AuthRoute({ children }) {
  const { data, isLoading, isValidating } = useAuth()

  if (isLoading || isValidating) return null
  if (!data?.user) {
    toast.warning('You need to login first!')
    return <Navigate to="/auth/login" />
  }

  return children
}

export default AuthRoute
