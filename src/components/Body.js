import React, {useState, useEffect, useRef} from 'react';
import SingleTrackForm from "./SingleTrackForm";
import Player from "./Player";

function Body(props) {

    const [tracks, setTracks] = useState(null)
    const [activeStory, setActiveStory] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)
    const [loading, setLoading] = useState(false)

    const getAll = () => {
        fetch('/all_body')
            .then(response => response.json())
            .then((data) => {
                let sortedData = data.sort(function (a, b) {
                    return new Date(a.dateCreated) - new Date(b.dateCreated)
                });
                setTracks(sortedData)
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
        <div className="body page">
            <div className='page-header'>
                <h1>Body</h1>
                <button className='primary' onClick={toggleForm}>Add new body track</button>
            </div>
            {loading === true ? <p>Uploading...</p> : null}
            <ul className='cards'>
                {tracks ?
                    tracks.map((track, i) => {
                        return (
                            <li key={i} className='card' onClick={() => {
                                openPlayer(track._id)
                            }}>
                                <span className='duration'>{track.duration}</span>
                                <img src={track.image}/>
                                <span className='narrator'>{track.narrator}</span>
                            </li>
                        )
                    }) : null
                }
            </ul>
            {showForm === true ? <SingleTrackForm getAll={getAll} page={'Body'} toggleForm={toggleForm} showLoader={showLoader} hideLoader={hideLoader}/> : null}
            {showPlayer === true ? <Player activeStory={activeStory} page={'Body'} closePlayer={closePlayer}/> : null}
        </div>
    );
}

export default Body;