import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hide = false }) {
    const [data, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            search: input
        })
        history.push('/search');
    }

    return (
        <form className="Search">
            <div className="textbox">
                <SearchIcon onClick={search} className="inputIcon" style={{color: 'gray'}}/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {!hide?<div className="buttons">
                <Button className="submitButton" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="submitButton" variant="outlined">I'm Feeling Lucky</Button>
            </div>:null}
            
            {!hide?<div className="language">
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
            </div>:null}
        </form>
    )
}

export default Search;