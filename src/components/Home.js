import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <div className="header">
                <div className="menu">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                </div>
            </div>
            <div className="main">
                
            </div>
        </div>
    );
}

export default Home;