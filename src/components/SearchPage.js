import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useSearch from '../useSearch';
import { Link } from 'react-router-dom';

import Google from '../assets/google.png';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Search from './Search';

function SearchPage() {
    const [term, dispatch] = useStateValue();
    const { data } = useSearch(term.search);

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchHeader">
                <Link to="/">
                    <img className="searchLogo"
                    src={Google}
                    alt="Google logo"/>
                </Link>
                <div className="searchBody">
                    <Search hide/>
                    <div className="searchOptions">
                        <div className="optionsLeft">
                            <div className="option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="option">
                                <MoreVertIcon/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="optionsRight">
                            <div className="option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true &&
            <div className="results">
                <p className="resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term.search}
                </p>
                {data?.items.map(item => (
                    <div className="result">
                        <a href={item.link}>
                            {item.displayLink}
                        </a>
                        <a className="resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="resultDescription">{item.snippet}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default SearchPage;