import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styles from './dataArea.module.css'

function DataArea() {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const movieInput = useRef();

    const searchMovie = (e) => {
        e.preventDefault();
        const fetchData = async (keyword) => {
            try {
                setError(null);
                setData(null);
                setLoading(true);
                const url = "/v1/search/movie.json";
                const response = await axios.get(url, {
                    headers : {
                        "X-Naver-Client-Id" : process.env.REACT_APP_CLIENT_ID,
                        "X-Naver-Client-Secret" : process.env.REACT_APP_CLIENT_SECRET,
                    },
                    params : {
                        query : `${keyword}`
                    }
                });
                setData(response.data);
            } catch(error){
                setError(error);
            }
            setLoading(false);
        }
        fetchData(movieInput.current.value);
    }

    useEffect(()=>{},[]);

    console.log(data);

    return (
        <div>
            <div className={styles.searchBox}>
                <input type="text" ref={movieInput}/>
                <button type="submit" onClick={searchMovie}>Search</button>
            </div>
        </div>
    )
}

export default DataArea
