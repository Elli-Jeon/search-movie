import { repeat } from 'lodash';
import React, { useRef, useState } from 'react'
import Result from './result';
import styles from './resultlist.module.css'
import _ from 'lodash';


function ResultList({data}) {
    let id = useRef(0);

    //Pagination
    const [ dataSize, setDataSize ] = useState(data.length);
    const [ pageSize, setPageSize] = useState(10);
    const [ pageNums, setPageNums ] = useState(Math.ceil(dataSize / pageSize));
    const [ currentPage, setCurrentPage ] = useState(0);
    const newArr = [...Array(pageNums).keys()];

    //Data를 페이지별로 쪼개기 위해.. n square라서 별로 이렇게 하고 싶지 않았는데ㅠㅜ
    let newData = [];
    if(data){
        for(let i = 0 ; i < pageNums; i++){
            let part = [];
            for(let j = 0; j < pageSize; j++){
                let x = _.cloneDeep(data[`${i*10+j}`]); 
                part.push(x);
            }
            newData.push(part);
        }
        console.log(newData[currentPage]);
    }
    
    
    return (
        <div>
            {console.log(data)}
            {(data.length !== 0) ? (
                <div className={styles.navbar}>
                    <span>포스터</span>
                    <span>제목</span>
                    <span>감독</span>
                    <span>배우</span>
                    <span>평점</span>
                </div>
            ) : (
                <div className={styles.beforeSearch}>Search Your Movie</div>
            )}
            {newData[currentPage].map(movie=>{
                id.current += 1;
                return <Result key={id.current} movie={movie}/>
            })}
            <div className={styles.pageNums}>
                {newArr.map((index)=>{
                    return (<button onClick={()=>setCurrentPage(index)} key={index+1}>{index+1}</button>)
                })}
            </div>
        </div>
    )
}

export default React.memo(ResultList)
