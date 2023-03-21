import React from 'react'
import { useParams } from 'react-router-dom'

import useCriminal from '@/hooks/useCriminal'
import CompToRender2 from '@/components/CompToRender2'

function PagesShow() {
  const { uid } = useParams()
  const data = useCriminal(uid)

  return (
    <CompToRender2 data={data} />
  )
}

export default PagesShow
