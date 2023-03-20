import React from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

function NoAuthRoute({ children, path }) {
  const { data, isLoading, isValidating } = useAuth()

  if (isLoading || isValidating) return null
  if (data) return <Navigate to={path || '/'} /> // change?

  return children
}

export default NoAuthRoute
