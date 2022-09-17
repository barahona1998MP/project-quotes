import quotes from './json/quotes.json'
import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {

  const getIndexRandom = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length) 
    return arr[indexRandom]
  }
  const elementRandom = getIndexRandom(quotes)
  const colorRandom = getIndexRandom(color)

  const [randomQuote, setRandomQuote] = useState(elementRandom)
  const [randomColor, setRandomColor] = useState(colorRandom)

  
  const getRandomAll = () => {
    setRandomQuote(getIndexRandom(quotes))
    setRandomColor(getIndexRandom(color))
  }
  
  const backgroundObject = {
    backgroundColor: randomColor
  }
  
  
  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
        randomQuote={randomQuote}
        getRandomAll={getRandomAll}
        randomColor={randomColor}
      />
        
    </div>
  )
}

export default App
