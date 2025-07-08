import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import SeenDrinks from './components/SeenDrinks'

function App() {
  const [currentDrink, setCurrentDrink] = useState(null)
  const [seenDrinks, setSeenDrinks] = useState([])

  const fetchRandomDrink = async ( ) => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const data = await response.json()
      const drink = data.drinks[0]
      setCurrentDrink(drink)

      setSeenDrinks(prev => [...prev, drink])
    } catch (error) {
      console.error('error fetching drink:', error)
    }
  }

  useEffect(() => {
    fetchRandomDrink()
  }, [])

  return (
    <div className='app-container'>
      <Header />
      <div className="content-container">
        <SeenDrinks seenDrinks={seenDrinks} />
      </div>
    </div>
  )
}

export default App
