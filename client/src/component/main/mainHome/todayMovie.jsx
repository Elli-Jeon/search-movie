import React from 'react'
import styles from './todayMovie.module.css'

function TodayMovie({movie}) {
    return (
        <div className={styles.posterContainer}>
            <img className={styles.poster} src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt="" />
            <div className={styles.posterInfo}>
                <h1>{movie.title}</h1>
                <button>More Info</button>
            </div>
        </div>
    )
}
export default TodayMovie
