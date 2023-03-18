import React from 'react'

import useAuth from '@/hooks/useAuth'

import FormsAuthLogin from '@/components/forms/auth/Login'

function PagesAuthLogin() {
  const { apiLogin } = useAuth()

  return (
    <div id="pages-auth-login" className="container text-white flex items-center justify-center h-screen -mt-20">
      <div>
        <div className="text-center">
          <h1 id="login-text" className="text-center text-5xl mb-5">STAFF LOGIN</h1>

          <FormsAuthLogin
            onSubmit={apiLogin}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthLogin
