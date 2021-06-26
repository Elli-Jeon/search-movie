import React, { useRef } from 'react'
import Result from './result';
import styles from './resultlist.module.css'

function ResultList({data}) {
    let id = useRef(0);

    return (
        <div>
            {console.log(data)}
            <div className={styles.navbar}>
                <span>포스터</span>
                <span>제목</span>
                <span>감독</span>
                <span>배우</span>
                <span>평점</span>
            </div>
            {data.map(movie=>{
                id.current += 1;
                return <Result key={id.current} movie={movie}/>
            })}
        </div>
    )
}

export default React.memo(ResultList)
