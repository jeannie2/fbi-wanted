import React from 'react'

import useAuth from '@/hooks/useAuth'

import FormsAuthSignup from '@/components/forms/auth/Signup'

function PagesAuthSignup() {
  const { apiSignup } = useAuth()

  return (
    <div id="pages-auth-signup" className="container text-white flex items-center justify-center h-screen -mt-20">
      <div>
        <div className="text-center">
          <h1 id="register-text" className="text-center text-5xl mb-5">STAFF ONLINE REGISTRATION</h1>

          <FormsAuthSignup
            onSubmit={apiSignup}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup
