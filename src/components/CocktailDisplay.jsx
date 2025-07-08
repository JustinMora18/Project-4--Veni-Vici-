function CocktailDisplay({ currentDrink, onDiscoverClick }) {
    if (!currentDrink) {
        return <p>Loading Drink...</p>
    }

    return (
        <div className="cocktail-display">
            <img 
            src={currentDrink.strDrinkThumb}
            alt={currentDrink.strDrink}
            className="drink-img"
            />

            <h2 className="drink-name">{currentDrink.strDrink}</h2>

            <div className="attributes">
            <button className="attribute-btn">{currentDrink.strCategory}</button>
            <button className="attribute-btn">{currentDrink.strAlcoholic}</button>
            <button className="attribute-btn">{currentDrink.strGlass}</button>
            </div>

            <button className="discover-btn" onClick={onDiscoverClick}>
            Discover
            </button>
        </div>
    )
}

export default CocktailDisplay