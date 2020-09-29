import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';


function Search() {
    return (
        <div className="Search">
            <div className="textbox">
                <SearchIcon className="inputIcon" style={{color: 'gray'}}/>
                <input/>
                <MicIcon/>
            </div>
            <div className="buttons">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search;