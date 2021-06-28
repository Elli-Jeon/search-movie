import React from 'react'
import styles from './todayMovie.module.css'

function TodayMovie({movie}) {
    return (
        <div>
            <img className={styles.poster} src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt="" />
        </div>
    )
}
export default TodayMovie
