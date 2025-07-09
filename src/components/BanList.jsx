function BanList({ banList, onRemoveFromBanList }) {
    return (
        <div className="ban-list">
            <h2 className="section-title">Ban List</h2>
            <div className="ban-items">
                {banList.length === 0 && <p>No banned items yet.</p>}
                {banList.map((item, index) => (
                    <button 
                        key={index} 
                        className="ban-item-btn" 
                        onClick={() => onRemoveFromBanList(item)} 
                    >
                        {item} ✕
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BanList  