import React from 'react'
import Counter from './component/counter'
import Exam from './component/exam'

function App() {
    return (
        <div>
            {/*<Counter initialValue={0}/>*/}
            <Exam score={100}/>
        </div>
    )
}

export default App;
