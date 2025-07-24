import './App.css';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import RightPanel from './components/RightPanel/RightPanel';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <div className="app-container">

        {/* Sidebar */}
        <Sidebar />

        <div className='screen'>
          {/** Navbar */}
          <Navbar />
          <div className="content-wrapper">
            {/* Ana içerik */}
            <MainContent />

            {/* Sağ panel */}
            <RightPanel />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
