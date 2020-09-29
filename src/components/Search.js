import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';


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
        </div>
    )
}

export default Search;