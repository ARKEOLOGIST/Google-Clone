import { useState, useEffect } from 'react';
import { API_KEY, CONTEXT_KEY } from './keys';

const useSearch = (key) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${key}`)
            .then(res => res.json())
            .then(response => {
                setData(response)
            });
        }

        fetchData();
    }, [key]); 

    return { data };
}

export default useSearch;