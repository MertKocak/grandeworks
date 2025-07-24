import './MainContent.css';

import Header from './Header/Header';
import BalanceCards from './BalanceCards/BalanceCards';
import EarningReport from './EarningReport/EarningReport';
import WebinarCard from './WebinarCard/WebinarCard';


const MainContent = () => {


    return (
        <main className="main-content">
            {/* Header */}
            <Header />

            {/* Balance Cards */}
            <BalanceCards />

            {/* Earning Report */}
            <EarningReport />

            {/* Upcoming Webinar */}
            <div className="webinar-wrapper">
                <WebinarCard />
            </div>
        </main>
    )
}

export default MainContent