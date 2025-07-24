import './Header.css'

type HeaderProps = {
    value: number;
    label: string;
};

const BalanceSummaryItem = ({ value, label }: HeaderProps) => {
    return (
        <div className="balance-summary-item">
            <div className="square-icon"></div>
            <div className="balance-summary-text">
                <h5>{value}</h5>
                <p>{label}</p>
            </div>
        </div>
    );
};

const Header = () => {
    const summaryData = [
        { value: 323, label: 'My Balance' },
        { value: 323, label: 'My Balance' },
    ];

    return (
        <header className="header">
            <div className="header-title">
                <h1>Home</h1>
                <p>Welcome back!</p>
            </div>

            <div className="balances-summary">
                {summaryData.map((item, index) => (
                    <BalanceSummaryItem
                        key={index}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>
        </header>
    )
}

export default Header
