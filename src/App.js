import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';
import { useEffect, useState } from 'react';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';


function App() {

const [loading,setLoading]=useState(false);
useEffect(() => {
  setTimeout(() => {
      setLoading(true);
    }, 2000);
}, []); 

  return (
    <Router>
      {!loading ?(<GlobalLoader/>):(
        <div className="App">
        <div className='a-app-content'>
          <SideBar />
          <Routes>
            {/* Route to MainPage component */}
            <Route exact path='/' element={<MainPage />} />
          </Routes>
        </div>
      </div>
      )
      }
    </Router>
  );
}

export default App;
