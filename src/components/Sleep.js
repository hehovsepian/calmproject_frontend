import React, {useState, useEffect, useRef} from 'react';
import SingleTrackForm from "./SingleTrackForm";
import Player from "./Player"

function Sleep(props) {

    const [stories, setStories] = useState(null)
    const [activeStory, setActiveStory] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)
    const [loading, setLoading] = useState(false)

    const getAll = () => {
        fetch('/all_sleep')
            .then(response => response.json())
            .then((data) => {
                let sortedData = data.sort(function(a,b){
                    return new Date(a.dateCreated) - new Date(b.dateCreated)
                });
                setStories(sortedData)
            })
    }

    useEffect(getAll, [])

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const openPlayer = (id) => {
        setShowPlayer(true)
        setActiveStory(id)
    }

    const closePlayer = () => {
        setShowPlayer(false)
    }

    const showLoader = () => {
        setLoading(true)
    }

    const hideLoader = () => {
        setLoading(false)
    }

    return (
        <div className="sleep page">
            <div className='page-header'>
                <h1>Sleep</h1>
                <button className='primary' onClick={toggleForm}>Add new sleep story</button>
            </div>
            {loading === true ? <p>Uploading...</p> : null}
            <ul className='cards'>
                {stories ?
                    stories.map((story, i) => {
                        return (
                            <li key={i} className='card' onClick={()=>{
                                openPlayer(story._id)
                            }}>
                                <span className='duration'>{story.duration}</span>
                                <img src={story.image}/>
                                <span className='narrator'>{story.narrator}</span>
                            </li>
                        )
                    }) : null
                }
            </ul>
            { showForm === true ? <SingleTrackForm getAll={getAll} page={'Sleep'} toggleForm={toggleForm} showLoader={showLoader} hideLoader={hideLoader}/> : null}
            { showPlayer === true ? <Player activeStory={activeStory} page={'Sleep'} closePlayer={closePlayer}/> : null}
        </div>
    );
}

export default Sleep;
