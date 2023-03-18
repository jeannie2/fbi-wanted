import React from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

function NoAuthRoute({ children }) {
  const { data, isLoading, isValidating } = useAuth()

  if (isLoading || isValidating) return null
  if (data?.user) return <Navigate to="/" />

  return children
}

export default NoAuthRoute
