// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Ensure the CSS file is correctly imported
import Navibar from './NavBar';
const LandingPage = () => {
    const navigate = useNavigate();

    const handleDesignClick = () => {
        navigate('/design');
    };

    const handleConsultantClick = () => {
        navigate('/consultant');
    };

    return (
        <div className="landing-container">
            <Navibar />
            <h1>Welcome to Fit Your Knit App</h1>
            <div className="button-container">
                <button className="black-white" onClick={handleDesignClick}>Create Your Design</button>
                <button onClick={handleConsultantClick}>Take Help from Image Consultant</button>
            </div>
        </div>
    );
};

export default LandingPage;
