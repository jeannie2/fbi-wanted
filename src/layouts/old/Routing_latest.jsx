import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

// import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Old/Another'
import PagesNotFound from '@/pages/NotFound'

import PagesIndex from '@/pages/wanted/Index'
import PagesShow from '@/pages/Show'
import PagesTopTen from '@/pages/wanted/topten/Index'
import PagesSearch from '@/pages/Search'

import NoAuthRoute from '@/layouts/NoAuthRoute'
import AuthRoute from '@/layouts/AuthRoute'

import PagesHome from '@/pages/Home'

import PagesAuthLogin from '@/pages/auth/Login'
import PagesAuthSignup from '@/pages/auth/Signup'

import PagesTipsNew, { noAuthRedirect } from '@/pages/tips/New'
import PagesTipsSubmitted from '@/pages/tips/Submitted'

import PagesAdminTipsIndex from '@/pages/admin/tips/Index'
import PagesAdminTipsShow from '@/pages/admin/tips/Show'

// <Route index element={<Navigate to="/wanted/topten" replace />} />
// <Route path="/" index element={<Home />}/>
// <Route index element={<Navigate to="/wanted/topten" replace />} />
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PagesHome />} />
          <Route path="/another" element={<PagesAnother />} />
          <Route path="/wanted/topten" element={<PagesTopTen />} />
          <Route path="/search" element={<PagesSearch />} />
          <Route path="/wanted/:subject" element={<PagesIndex />} />
          <Route path="/show/:uid" element={<PagesShow />} />

          <Route path="/tips/new" element={<NoAuthRoute path={noAuthRedirect}><PagesTipsNew /></NoAuthRoute>} />
          <Route path="/tips/submitted" element={<NoAuthRoute><PagesTipsSubmitted /></NoAuthRoute>} />

          <Route path="/admin/tips" element={<AuthRoute><PagesAdminTipsIndex /></AuthRoute>} />
          <Route path="/admin/tips/:id" element={<AuthRoute><PagesAdminTipsShow /></AuthRoute>} />

          <Route path="/auth/login" element={<NoAuthRoute><PagesAuthLogin /></NoAuthRoute>} />
          <Route path="/auth/signup" element={<NoAuthRoute><PagesAuthSignup /></NoAuthRoute>} />

          <Route path="*" element={<PagesNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing

// tips index is in my. new is not (public). auth route?for tips index:
// import PagesMyTips from '@/pages/my/tips' // same for all logged in users
