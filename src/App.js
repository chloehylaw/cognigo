import React from 'react';
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import GamesOverview from "./pages/GamesOverview";
import ProgressionMap from "./pages/ProgressionMap";
import DailyChallenges from "./pages/DailyChallenges";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import TowerOfHanoi from './pages/TowerOfHanoi/TowerOfHanoi';
import HanoiStartScreen from './pages/TowerOfHanoi/HanoiStartScreen';

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/games" element={<GamesOverview/>}/>
                    <Route path="/progression" element={<ProgressionMap/>}/>
                    <Route path="/challenges" element={<DailyChallenges/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/games/hanoi/go" element={<TowerOfHanoi/>}/>
                    <Route path="/games/hanoi" element={<HanoiStartScreen/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
