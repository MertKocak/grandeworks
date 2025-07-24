import "./CourseProgress.css"

import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface CourseProgressProps {
    title: string;
    date: string;
    tutor: string;
    percent: number;
}

const CourseProgress = ({ title, date, tutor, percent }: CourseProgressProps) => (
    <div className="course-card">
        <div className="course-text">
            <h4>{title}</h4>
            <h6>Start date: {date}</h6>
            <p className="tutor">Tutor: {tutor}</p>
        </div>
        <div>
            <CircularProgressbar styles={buildStyles(
                {
                    textColor: "#101010",
                    textSize: "24px",
                    trailColor: '#e2e5e7ff',
                    backgroundColor: '#3a61ee',
                    pathColor: "#3a61ee"
                }
            )} className='progress-circle' value={percent} text={`${percent}%`} />
        </div>
    </div>
);

export default CourseProgress