import React from 'react'
import styles from './result.module.css'

function Result({movie}) {
    return (
        <div className={styles.result}>
            {movie.image ? (<img src={movie.image} alt=''/>) : (<img src='logo192.png' alt=''/>)}
            <span>{movie.title.replace('<b>','').replace('</b>','')}</span>
            <span>{movie.director}</span>
            <span>{movie.actor}</span>
            <span>{movie.userRating}</span>
            <span><a href={movie.link}>더보기</a></span>
        </div>
    )
}

export default React.memo(Result)
