import "./BalanceCards.css"

const balanceCardsData = [
    { color: "#7367ef", value: 42, title: "On route vehicles", rate: "+18.2%" },
    { color: "#fd9f40", value: 42, title: "On route vehicles", rate: "+18.2%" },
    { color: "#ff4c56", value: 42, title: "On route vehicles", rate: "+18.2%" },
    { color: "#04bacc", value: 42, title: "On route vehicles", rate: "+18.2%" },
];

// orta içerik paneli balance kart yapısı
const BalanceCards = () => {
    return (
        <section className="balance-cards">
            {balanceCardsData.map((card, i) => (
                <div
                    className="balance-card"
                    key={i}
                    style={{ borderColor: card.color }}
                >
                    <div className='balance-card-header'>
                        <div
                            className="color-box"
                            style={{ backgroundColor: card.color }}
                        ></div>
                        <p className="value">{card.value}</p>
                    </div>
                    <div className='balance-card-content'>
                        <p className="title">{card.title}</p>
                        <p className="rate">
                            <strong>{card.rate}</strong> <span style={{ color: "gray" }}>than last week</span>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default BalanceCards