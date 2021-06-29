import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route,  BrowserRouter as Router } from 'react-router-dom'
import TodayMovie from './todayMovie'
import styles from './home.module.css'

function Home() {
    
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ poster, setPoster ] = useState('');
    
    useEffect(()=>{
        const fetchData = async() => {
            try{
                setData([]);
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
                setError(error);
            }
        }
        fetchData();
    },[])

    // useEffect 에 setTimeout 걸어서 포스터 변경


    if(loading) return <p>Data is loading</p>
    if(error) return <p>Error</p>

    console.log(data);
    return (
        <div>
            {/* 이렇게 바로 하면, data가 []일때 바로 랜더링되어서인지 undefined가 되어버림.. */}
            {/*<img src={'https://image.tmdb.org/t/p/original'+data[1].poster_path} alt='loading'/>*/}
            {/*data.map((movie,index)=>{
                return <TodayMovie key={index} movie={movie}/>
            })*/}
            {data.filter((movie,index) => index === 2).map((movie,index)=>{
                return <TodayMovie key={index} movie={movie}/>
            })}
            {/*요 위의 정보를 여기에 쓸지, 안 으로 옮길지..*/}
        </div>
    )

}

export default Home
