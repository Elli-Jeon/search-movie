import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route,  BrowserRouter as Router } from 'react-router-dom'
import styles from './home.module.css'

function Home() {
    
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    
    useEffect(()=>{
        const fetchData = async() => {
            try{
                setData(null);
                setError(null);
                setLoading(true);
                const response = await axios.get('/movie/popular',{
                    params : {
                        api_key : process.env.REACT_APP_TMDB_API_KEY,
                        language : 'ko',
                    }
                })
                setData(response.data.results);
                setLoading(false);
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[])

    //console.log(data);

    return (
        <Router>
            <div>
                Hi!
            </div>
        </Router>
    )
}

export default Home
