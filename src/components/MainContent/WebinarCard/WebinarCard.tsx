import React from 'react'
import "./WebinarCard.css"

const WebinarCard = () => {
    return (
        <section className="upcoming-webinar">
            <h3>Upcoming Webinar</h3>
            <p>Next Generation Frontend Architecture Using Layout Engine And React Native Web.</p>
            <div className="webinar-info">
                <div className="info-box">
                    <div className='webinar-square'></div>
                    <div>
                        <h3>17 Nov 25</h3>
                        <p>Date</p>
                    </div>
                </div>
                <div className="info-box">
                    <div className='webinar-square'></div>
                    <div>
                        <h3>32 minutes</h3>
                        <p>Duration</p>
                    </div>
                </div>
            </div>
            <button className="join-button">Join the event</button>
        </section>
    )
}

export default WebinarCard