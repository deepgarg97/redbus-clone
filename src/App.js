// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import Home from './components/Home';
import JourneyContext from './contexts/JourneyContext';
import { useState } from 'react';
import SeatSelection from './components/SeatSelection';
import Journey from './components/Journey';
import Login from './components/Login';

function App() {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="App">
      <JourneyContext.Provider value={{
        from:from,
        to:to,
        setfrom:setfrom,
        setTo:setTo
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Journey Component={Home}/>} />
            <Route path="/results" element={<Journey Component={SearchResults} />} />
            <Route path="/book-seats" element={<Journey Component={SeatSelection} />} />
          </Routes>
        </BrowserRouter>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
