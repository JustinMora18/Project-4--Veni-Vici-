import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import SeenDrinks from './components/SeenDrinks'
import CocktailDisplay from './components/CocktailDisplay'
import BanList from './components/BanList'

function App() {
  const [currentDrink, setCurrentDrink] = useState(null)
  const [seenDrinks, setSeenDrinks] = useState([])
  const [banList, setBanList] = useState([])

  const isDrinkBanned = (drink) => {
    return (
      banList.includes(drink.strCategory) ||
      banList.includes(drink.strAlcoholic) ||
      banList.includes(drink.strGlass)
    )
  }

  const fetchRandomDrink = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const data = await response.json()
      const drink = data.drinks[0]

      if (isDrinkBanned(drink)) {
        console.log(`Drink baneado: ${drink.strDrink}, buscando otro...`)
        fetchRandomDrink()
        return
      }

      setCurrentDrink(drink)

      setSeenDrinks(prev => {
        const exists = prev.some(d => d.idDrink === drink.idDrink)
        if (exists) return prev
        return [...prev, drink]
      })

    } catch (error) {
      console.error('Error al obtener bebida:', error)
    }
  }

  useEffect(() => {
    fetchRandomDrink()
  }, [])

  const addToBanList = (item) => {
    if (!banList.includes(item)) {
      setBanList(prev => [...prev, item])
    }
  }

  const removeFromBanList = (item) => {
    setBanList(prev => prev.filter(bannedItem => bannedItem !== item))
  }

  return (
    <div className='app-container'>
      <Header />

      <div className="content-container">
        <SeenDrinks seenDrinks={seenDrinks} />

        <CocktailDisplay
          currentDrink={currentDrink}
          onDiscoverClick={fetchRandomDrink}
          onAttributeClick={addToBanList}
        />

        <BanList
          banList={banList}
          onRemoveFromBanList={removeFromBanList}
        />
      </div>
    </div>
  )
}

export default App