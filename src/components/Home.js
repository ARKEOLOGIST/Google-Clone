import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import Google from '../assets/google.png';

function Home() {
    return (
        <div className="Home">
            <div className="header">
                <div className="menu">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar style={{ width: '35px',height: '35px'}}/>
                </div>
            </div>
            <div className="main">
            <img src={Google}/>
            <div className="inputfield">
                
            </div>
            </div>
        </div>
    );
}

export default Home;