import { useEffect, useState } from 'react'
import './Sidebar.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import UserInfo from './UserInfo/UserInfo';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isPopularOpen, setIsPopularOpen] = useState(false);
    const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

    // seçilen linki kaydetme
    useEffect(() => {
        const savedItem = localStorage.getItem("selectedSubItem");
        if (savedItem === "Top Rated") {
            setSelectedSubItem("Top Rated");
            setIsPopularOpen(true);
        }
    }, []);

    return (
        <>
            <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <IoClose className='hamburger-icon' /> : <IoMenu className='hamburger-icon' />}
            </button>
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className='sidebar-menu'>
                    <p className='logo'>
                        GrandeWorks
                    </p>
                    <nav className="menu">
                        <a href="/">Home</a>
                        <a href="/">All Courses</a>
                        <div className="dropdown">
                            <button
                                className={`dropdown-toggle ${isPopularOpen ? 'active' : ''}`}
                                onClick={() => setIsPopularOpen(!isPopularOpen)}
                            >
                                Popular Courses <span className="arrow">{isPopularOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
                            </button>
                            {isPopularOpen && (
                                <div className="dropdown-menu">
                                    <a
                                        href="/"
                                        className={selectedSubItem === 'Top Rated' ? 'selected' : ''}
                                        onClick={() => {
                                            setSelectedSubItem('Top Rated');
                                            localStorage.setItem("selectedSubItem", "Top Rated");
                                        }}
                                    >
                                        Top Rated
                                    </a>
                                    <a
                                        href="/"
                                        className={selectedSubItem === 'Most Viewed' ? 'selected' : ''}
                                        onClick={() => {
                                            setSelectedSubItem('Most Viewed');
                                            localStorage.removeItem("selectedSubItem");
                                        }}
                                    >
                                        Most Viewed
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="/">Schedule</a>
                        <a href="/">My Courses</a>
                        <a href="/">Statistics</a>
                    </nav>
                </div>
                <div className="user-section">
                    <UserInfo
                        name="Volter Anderson"
                        plan="Premium plan"
                        avatarUrl=""
                    />
                    <a href="/" className="logout">
                        <div className="logout-icon"></div> Log out
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar