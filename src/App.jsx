import { useState } from 'react'
import './App.css'

import SubmitForm from './SubmitForm'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <SubmitForm />
    <p>Note: This site uses ChartLyrics API (because it's free).  If the song you want isn't listed by ChartLyrics, sorry. </p>
    </div>
  )
}

export default App
