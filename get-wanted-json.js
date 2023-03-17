// import axios from 'axios'
// import fs from 'fs'
const axios = require('axios')
const fs = require('fs')

const sleep = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })

const getWatedPage = async (page) => {
  console.log(page) // eslint-disable-line
  try {
    const resp = await axios({
      method: 'GET',
      url: `https://api.fbi.gov/@wanted?page=${page}`,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        accept: 'application/json'
      }
    })

    return resp.data.items
  } catch (err) {
    console.log(err) // eslint-disable-line

    return []
  }
}

const getAllWanted = async () => {
  const wanted = []

  for (let i = 1; i < 3; i += 1) {
    const newData = await getWatedPage(i) // eslint-disable-line
    if (newData.length > 0) {
      wanted.push(...newData)
    }
    await sleep(3000) // eslint-disable-line
  }

  fs.writeFile('criminals.json', JSON.stringify(wanted), (err) => {
    if (err) console.log(err) // eslint-disable-line
  })
}

getAllWanted()
