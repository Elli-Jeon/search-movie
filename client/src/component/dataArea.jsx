import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ResultList from './resultlist';
import styles from './dataArea.module.css'

function DataArea() {
    const [ data, setData ] = useState([]);
    const [ keyword, setKeyword ] = useState('');
    const [ search, setSearch ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");

    
    useEffect(()=>{
        const fetchData = async (search) => {
            try {
                setData(null);
                setError("");
                setLoading(true);
                const url = "/v1/search/movie.json";
                const response = await axios.get(url, {
                    headers : {
                        "X-Naver-Client-Id" : process.env.REACT_APP_CLIENT_ID,
                        "X-Naver-Client-Secret" : process.env.REACT_APP_CLIENT_SECRET,
                    },
                    params : {
                        query : `${search}`
                    }
                });
                setData(response.data.items);
                setLoading(false);
            } catch(error){
                setError(error);
            }
        }
        
        if(search === ""){ // 맨처음 랜더링될 때 검색 안하기 위해서
            return;
        }
        fetchData(search);

    },[search]);
    

    return (
        <div>
            <div className={styles.searchBox}>
                <input type="text" value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
                <button type="submit" onClick={()=>{setSearch(keyword)}}>Search</button>
            </div>
            {error && <div>에러가 발생했습니다 : {error}</div>}
            {loading?(<div>Loading...</div>):(
                <ResultList data={data}/>
            )}
        </div>
    )
}

export default DataArea
