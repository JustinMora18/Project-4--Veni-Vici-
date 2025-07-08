function SeenDrinks({ seenDrinks }) {
    return (
        <div className="seen-drinks">
            <h2 className="section-title">Drinks<br />you've seen</h2>
            <div className="seen-list">
            {seenDrinks.map((drink, index) => (
                <div className="seen-item" key={drink.idDrink || index}>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{drink.strDrink}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default SeenDrinks