function CocktailDisplay({ currentDrink, onDiscoverClick, onAttributeClick }) {
    if (!currentDrink) {
        return <p>Loading drink...</p>
    }

    return (
        <div className="cocktail-display">
            <img 
                src={currentDrink.strDrinkThumb} 
                alt={currentDrink.strDrink} 
                className="drink-image" 
            />
            <h2 className="drink-name">{currentDrink.strDrink}</h2>
            <div className="attributes">
                <button className="attribute-btn" onClick={() => onAttributeClick(currentDrink.strCategory)}>{currentDrink.strCategory}</button>
                <button className="attribute-btn" onClick={() => onAttributeClick(currentDrink.strAlcoholic)}>{currentDrink.strAlcoholic}</button>
                <button className="attribute-btn" onClick={() => onAttributeClick(currentDrink.strGlass)}>{currentDrink.strGlass}</button>
            </div>
            <button className="discover-btn" onClick={onDiscoverClick}> Discover </button>
        </div>
    )
}

export default CocktailDisplay