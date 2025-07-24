import React from 'react'
import "./RightPanel.css"
import { IoClose } from "react-icons/io5";
import TestCard from './TestCard/TestCard';
import CourseProgress from './CourseProgress/CourseProgress';
import ContactCard from './ContactCard/ContactCard';

const RightPanel = () => {
    const contacts = [
        {
            name: "Furkan Tellioğlu",
            email: "grandeworks@gmail.com",
            level: "Senior"
        },
        {
            name: "Furkan Tellioğlu",
            email: "grandeworks@gmail.com",
            level: "Senior"
        }
    ];

    return (
        <div className="right-panel">
            <div className='panel-header'>
                <div className="panel-header-title">
                    <h1>Home</h1>
                    <p>Welcome back!</p>
                </div>
                <div>
                    <IoClose className='panel-header-icon' />
                </div>
            </div>
            <TestCard title='Test your English level!' />
            <CourseProgress
                title="English for travelling"
                date="04/05/2024"
                tutor="Volter Anderson"
                percent={34}
            />

            <div className="connect-section">
                <div className='connect-header'>
                    <h4>Let’s Connect</h4>
                    <a href='/'>See All</a>
                </div>
                {contacts.map((c, i) => (
                    <ContactCard key={i} {...c} />
                ))}
            </div>
        </div>
    )
}

export default RightPanel