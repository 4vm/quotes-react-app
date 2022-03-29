import axios from 'axios'
import { useState } from 'react'

import Card from './components/Card'

function App() {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setContent(res.data.content)
        setAuthor(res.data.author)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Card content={content} author={author} onNewQuote={getQuote} />
    </>
  )
}

export default App
