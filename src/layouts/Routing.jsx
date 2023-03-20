import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Old/Another'
import PagesNotFound from '@/pages/NotFound'

import PagesIndex from '@/pages/wanted/Index'
import PagesShow from '@/pages/Show'
import PagesTopTen from '@/pages/wanted/topten/Index'
import PagesSearch from '@/pages/Search'

import NoAuthRoute from '@/layouts/NoAuthRoute'
import AuthRoute from '@/layouts/AuthRoute'

import PagesAuthLogin from '@/pages/auth/Login'
import PagesAuthSignup from '@/pages/auth/Signup'
import PagesTipsNew from '@/pages/tips/New/New'
import PagesTipsSubmitted from '@/pages/tips/New/Submitted'

import PagesMyTipsShow from '@/pages/my/tips/Show'
import PagesMyTipsIndex from '@/pages/my/tips/Index'
// tips index is in my. new is not (public). auth route?for tips index:
//    <Route path="/my/todos" element={<AuthRoute><PagesMyTodosIndex /></AuthRoute>} />
//    <Route path="/my/todos/new" element={<AuthRoute><PagesMyTodosNew /></AuthRoute>} />
// import PagesMyTips from '@/pages/my/tips' // same for all logged in users

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

          <Route path="/tips/new" element={<NoAuthRoute><PagesTipsNew /> </NoAuthRoute>} />
          <Route path="/tips/new/submitted" element={<NoAuthRoute><PagesTipsSubmitted /></NoAuthRoute>} />

          <Route path="/my/tips" element={<AuthRoute><PagesMyTipsIndex /></AuthRoute>} />
          <Route path="/my/tips/:id" element={<AuthRoute><PagesMyTipsShow /></AuthRoute>} />

          <Route path="/auth/login" element={<NoAuthRoute><PagesAuthLogin /></NoAuthRoute>} />
          <Route path="/auth/signup" element={<NoAuthRoute><PagesAuthSignup /></NoAuthRoute>} />

          <Route path="*" element={<PagesNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing

//           <Route path="/my/tips" element={<AuthRoute><PagesMyTips /></AuthRoute>} />
/*
<Route path="/topten" element={<PagesTopTen />} />
<Route path="/cei" element={<PagesCEI />} />
          <Route path="/counterintelligence" element={<PagesCounterintelligence />} />

          <Route path="/cyber" element={<PagesCyber />} />
          <Route path="/kidnapmissing" element={<PagesKidnapMissing />} />
          <Route path="/seekinginfo" element={<PagesSeekingInfo />} />

          <Route path="/vicap" element={<PagesViCAP />} />
          <Route path="/additional" element={<PagesAdditional />} /> */
