import * as React from "react"
import {useEffect, useState} from 'react'
import axios from 'axios'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  const [ pageData, setPageData ] = useState(null)

  useEffect(async () => {
    try {
      const data = await axios.get(`${process.env.API_URL}/main-page`)

      setPageData(data)
    } catch (e) {
      console.error('Main page api req error: ', e)
    }
  })

  return (
    <main style={pageStyles}>
      <title>Jedisignals</title>
      <h1>Jedisignals</h1>
      <div>{JSON.stringify(pageData, null, 2)}</div>
    </main>
  )
}

export default IndexPage
