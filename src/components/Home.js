import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import Google from '../assets/google.png';
import Search from './Search';

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
                <Search/>
            </div>
            </div>
            <div className="region">
                <Link to="/region">India</Link>
            </div>
            <div className="footer">
                <div className="footer_left">
                    <Link to="/advertising">Advertising</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/about">About</Link>
                    <Link to="/how_search_works">How Search Works</Link>
                </div>
                <div className="footer_right">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
            <div className="invisible">
                    <div className="invisible_right">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                    <div className="invisible_left">
                        <Link to="/advertising">Advertising</Link>
                        <Link to="/business">Business</Link>
                        <Link to="/about">About</Link>
                        <Link to="/how_search_works">How Search Works</Link>
                    </div>
            </div>
        </div>
    );
}

export default Home;