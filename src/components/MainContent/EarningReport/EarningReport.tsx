import { HiDotsHorizontal } from "react-icons/hi";
import "./EarningReport.css"
import StatusCard from './StatusCard/StatusCard';
import ChartInfo from "./ChartInfo/ChartInfo";
import BarChart from "./BarChart/BarChart";

// orta içerik paneli earningreport
const EarningReport = () => {
    const barData = [30, 55, 40, 35, 80, 40, 50];
    const activeBarIndex = 4;
    return (
        <section className="earning-reports">
            {/* header */}
            <div className="earning-header">
                <span>
                    <h2 className="title">Earning Reports</h2>
                    <p className="subtitle">Weekly Earnings Overview</p>
                </span>
                <HiDotsHorizontal className='dot-icon' />
            </div>

            <div className="chart-section">
                {/* sol: amount ve açıklama */}
                <ChartInfo
                    amount="S468"
                    rateChange="+4.2%"
                    description="You informed of this week compared to last week"
                />

                {/* sağ: chart */}
                <BarChart data={barData} activeIndex={activeBarIndex} />
            </div>

            {/* status kartları */}
            <div className="status-cards">
                <StatusCard label="Earning" value="545.69" color="#7367ef" fill="60%" />
                <StatusCard label="Profit" value="545.69" color="#04bacc" fill="70%" />
                <StatusCard label="Expense" value="545.69" color="#ff4c56" fill="50%" />
            </div>
        </section>
    );
}

export default EarningReport;
