import "./BarChart.css";

type BarChartProps = {
    data: number[];
    activeIndex?: number;
};

// earningreport barchart
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

export default BarChart