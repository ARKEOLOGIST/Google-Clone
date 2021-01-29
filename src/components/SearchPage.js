import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useSearch from '../useSearch';

function SearchPage() {
    const [term, dispatch] = useStateValue();
    const { data } = useSearch(term.search);

    console.log(data);

    return (
        <div className="searchPage">
            <div className="header">
                <h1>{term.search}</h1>
            </div>
            <div className="results">

            </div>
        </div>
    )
}

export default SearchPage;