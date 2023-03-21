import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'

import App from '@/layouts/App'

import PagesNotFound from '@/pages/NotFound'

import PagesIndex from '@/pages/wanted/Index'
import PagesShow from '@/pages/wanted/Show'

import PagesSearch from '@/pages/Search'

import NoAuthRoute from '@/layouts/NoAuthRoute'
import AuthRoute from '@/layouts/AuthRoute'

import PagesAuthLogin from '@/pages/auth/Login'
import PagesAuthSignup from '@/pages/auth/Signup'

import PagesTipsNew, { noAuthRedirect } from '@/pages/tips/New'
import PagesTipsSubmitted from '@/pages/tips/Submitted'

import PagesAdminTipsIndex from '@/pages/admin/tips/Index'
import PagesAdminTipsShow from '@/pages/admin/tips/Show'

// import PagesTopTen from '@/pages/wanted/topten/Index'
// <Route index element={<Navigate to="/wanted/topten" replace />} />
// <Route path="/wanted/topten" element={<PagesTopTen />} />

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Navigate to="/wanted/topten" replace />} />
          <Route path="/search" element={<PagesSearch />} />
          <Route path="/wanted/:subject" element={<PagesIndex />} />
          <Route path="/wanted/show/:uid" element={<PagesShow />} />

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
//  <Route path="/my/todos" element={<AuthRoute><PagesMyTodosIndex /></AuthRoute>} />
//  <Route path="/my/todos/new" element={<AuthRoute><PagesMyTodosNew /></AuthRoute>} />
// import PagesMyTips from '@/pages/my/tips' // same for all logged in users
//  <Route index element={<Navigate to="/wanted/topten" replace />} />
//  <Route path="/" index element={<Home />}/>
// <Route index element={<Navigate to="/wanted/topten" replace />} />
// <Route path="/wanted/topten" element={<PagesTopTen />}
//  <Route index element={<PagesHome />} />
//  <Route path="/another" element={<PagesAnother />} />
