import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'

import PagesIndex from '@/pages/Index'
import PagesShow from '@/pages/Show'
import PagesTopTen from '@/pages/TopTen'
/*
import PagesCyber from '@/pages/Cyber'
import PagesCounterintelligence from '@/pages/Counterintelligence'
import PagesViCAP from '@/pages/ViCAP'
import PagesTopTen from '@/pages/TopTen'
import PagesAdditional from '@/pages/Additional'
import PagesCEI from '@/pages/CEI'
import PagesKidnapMissing from '@/pages/KidnapMissing'
import PagesSeekingInfo from '@/pages/SeekingInfo' */

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PagesHome />} />
          <Route path="/another" element={<PagesAnother />} />
          <Route path="/topten" element={<PagesTopTen />} />
          <Route path="/index/:subject" element={<PagesIndex />} />
          <Route path="/show/:uid" element={<PagesShow />} />
          <Route path="*" element={<PagesNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing

/*

<Route path="/topten" element={<PagesTopTen />} />
<Route path="/cei" element={<PagesCEI />} />
          <Route path="/counterintelligence" element={<PagesCounterintelligence />} />

          <Route path="/cyber" element={<PagesCyber />} />
          <Route path="/kidnapmissing" element={<PagesKidnapMissing />} />
          <Route path="/seekinginfo" element={<PagesSeekingInfo />} />

          <Route path="/vicap" element={<PagesViCAP />} />
          <Route path="/additional" element={<PagesAdditional />} /> */
