import "./ChartInfo.css";

type ChartInfoProps = {
    amount: string;
    rateChange: string;
    description: string;
};

// earningreport chartinfo
const ChartInfo = ({ amount, rateChange, description }: ChartInfoProps) => {
    return (
        <div className="chart-info">
            <div className="amount-section">
                <p className="amount">{amount}</p>
                <div className="rate-change">
                    {rateChange}
                </div>
            </div>
            <p className="description">
                {description}
            </p>
        </div>
    );
};

export default ChartInfo