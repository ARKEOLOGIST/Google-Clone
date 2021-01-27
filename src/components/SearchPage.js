import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    return (
        <div className="searchPage">
            <div className="header">
                <h1>{term}</h1>
            </div>
            <div className="results">

            </div>
        </div>
    )
}

export default SearchPage();