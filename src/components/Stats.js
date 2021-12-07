import {useState, useEffect} from 'react';

function Stats(props) {

    const convertMinutes = (num) => {
        let hours = Math.floor(num / 60);
        let minutes = num % 60;
        return hours + "h " + minutes + "m";
    }

    return (
        <div className="stats">
            <button onClick={props.handleShowMenu}>
                <svg className="ScreenTitle__IconChevron-sc-1uv8lep-0 edPSSh" xmlns="http://www.w3.org/2000/svg"
                     width="26" height="26" viewBox="0 0 96 96">
                    <path
                        d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82"
                        fill-rule="evenodd" fill="white"></path>
                </svg>
            </button>
            <h1>My Stats</h1>
            <div className='transparent-background'>
                <div className='mindful-days'>
                    <p>{props.userData.activeDays}</p>
                    <p>Mindful Days</p>
                </div>
                <div className='other-stats'>
                    <div>
                        <p>Longest Streak</p>
                        <p>{props.userData.streak}</p>
                    </div>
                    <div>
                        <p>Total Sessions</p>
                        <p>{props.userData.totalSessions}</p>
                    </div>
                    <div>
                        <p>Mindful Minutes</p>
                        <p>{convertMinutes(props.userData.totalMinutes)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
