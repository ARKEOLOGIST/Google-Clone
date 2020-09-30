import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");

    const search = e => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div className="Search">
            <div className="textbox">
                <SearchIcon className="inputIcon" style={{color: 'gray'}}/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            <div className="buttons">
                <Button onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            <div className="language">
                <div className="offer">Google offered in:</div>
                <Link to="/language1">हिन्दी</Link>
                <Link to="/language2">বাংলা</Link>
                <Link to="/language3">తెలుగు</Link>
                <Link to="/language4">मराठी</Link>
                <Link to="/language5">தமிழ்</Link>
                <Link to="/language6">ગુજરાતી</Link>
                <Link to="/language7">ಕನ್ನಡ</Link>
                <Link to="/language8">മലയാളം</Link>
                <Link to="/language9">ਪੰਜਾਬੀ</Link>
            </div>
        </div>
    )
}

export default Search;