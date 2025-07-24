import { HiDotsHorizontal } from "react-icons/hi";
import "./EarningReport.css"
import StatusCard from './StatusCard/StatusCard';

type BarChartProps = {
    data: number[];
    activeIndex?: number;
};

type ChartInfoProps = {
    amount: string;
    rateChange: string;
    description: string;
};

const BarChart = ({ data, activeIndex }: BarChartProps) => {
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    return (
        <div className="chart-container">
            <div className="chart">
                {data.map((value, index) => (
                    <div
                        key={index}
                        className={`bar ${index === activeIndex ? "active" : ""}`}
                        style={{ height: `${value}%` }}
                    ></div>
                ))}
            </div>
            <div className="chart-labels">
                {days.map((day, i) => (
                    <span key={i}>{day}</span>
                ))}
            </div>
        </div>
    );
};

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

const EarningReport = () => {
    const barData = [30, 55, 40, 35, 80, 40, 50];
    const activeBarIndex = 4;
    return (
        <section className="earning-reports">
            {/* Header */}
            <div className="earning-header">
                <span>
                    <h2 className="title">Earning Reports</h2>
                    <p className="subtitle">Weekly Earnings Overview</p>
                </span>
                <HiDotsHorizontal className='dot-icon' />
            </div>

            <div className="chart-section">
                {/* Sol: Amount ve açıklama */}
                <ChartInfo
                    amount="$468"
                    rateChange="+4.2%"
                    description="You informed of this week compared to last week"
                />

                {/* Sağ: Chart */}
                <BarChart data={barData} activeIndex={activeBarIndex} />
            </div>

            {/* Status Cards */}
            <div className="status-cards">
                <StatusCard label="Earning" value="545.69" color="#7367ef" fill="60%" />
                <StatusCard label="Profit" value="545.69" color="#04bacc" fill="70%" />
                <StatusCard label="Expense" value="545.69" color="#ff4c56" fill="50%" />
            </div>
        </section>
    );
}

export default EarningReport;
