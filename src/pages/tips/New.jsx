import React from 'react'
import FormsTipsChange from '@/components/forms/tips/Change'
import useTips from '@/hooks/useTips'

export const noAuthRedirect = '/admin/tips'

function PagesTipsNew() {
  const { apiCreateTip } = useTips()

  return (
    <div id="pages-auth-login" className="container text-white flex items-center justify-center h-screen -mt-20">
      <div>
        <div className="text-center">
          <h1 id="login-text" className="text-center text-5xl mb-5">TIP SUBMISSION FORM</h1>
          <FormsTipsChange
            onSubmit={apiCreateTip}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesTipsNew
