import "./StatusCard.css"

type StatusCardProps = {
    label: string;
    value: string;
    color: string;
    fill: string;
};

// earningreport status kart
const StatusCard = ({ label, value, color, fill }: StatusCardProps) => {
    return (
        <div className={`status`}>
            <div className='status-header'>
                <div style={{ backgroundColor: color }} className="dot"></div>
                <p className="status-label">{label}</p>
            </div>
            <div className='progress-section'>
                <p className="status-value">{value}</p>
                <div className="progress">
                    <div className="fill" style={{ width: fill, backgroundColor: color }}></div>
                </div>
            </div>
        </div>
    );
};

export default StatusCard