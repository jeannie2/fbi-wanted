import React from 'react'
import { useParams } from 'react-router-dom'

import useCriminals from '@/hooks/useCriminals'
import CompToRender from '@/components/CompToRender'

// doesnt include vicap, a few other categories

const keyToSubject = {
  topten: 'Ten Most Wanted Fugitives',
  cyber: "Cyber's Most Wanted",
  kidnapmissing: 'Kidnappings and Missing Persons',
  counterintelligence: 'Counterintelligence',
  seekinginfo: 'Seeking Information',
  additional: 'Additional Violent Crimes',
  cei: 'Criminal Enterprise Investigations'
}

function PagesIndex() {
  const { subject } = useParams()
  const data = useCriminals(keyToSubject[subject])
  //  console.log('IN THE INDEX')
  return <CompToRender data={data} /> // same comp regardless
}

export default PagesIndex
