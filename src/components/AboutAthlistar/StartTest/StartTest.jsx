import React from 'react';
import './StartTest.css';

function StartTest() {
    return (
        <div className='start-test-container'>
            <h2 className='start-test-heading'>
                START YOUR <span className='fit-test'>FIT TEST</span>
            </h2>
            <p className='start-test-para'>
                Behind Every Legend Is The Right Fit. Athlistar Was Born To Build Yours.
            </p>
            <button className='find-fit-btn'>
                FIND MY FIT
                <span className='arrow'>↗</span>
            </button>
        </div>
    )
}

export default StartTest;