import React, {useState, useEffect, useRef} from 'react';
import SeriesForm from "./SeriesForm";
import Player from "./Player"

function Meditate(props) {

    const [meditations, setMeditations] = useState(null)
    const [activeStory, setActiveStory] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)
    const [loading, setLoading] = useState(false)

    const getAll = () => {
        fetch('/all_meditations')
            .then(response => response.json())
            .then((data) => {
                let sortedData = data.sort(function(a,b){
                    return new Date(a.dateCreated) - new Date(b.dateCreated)
                });
                setMeditations(sortedData)
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
        <div className="meditate page">
            <div className='page-header'>
                <h1>Meditate</h1>
                <button className='primary' onClick={toggleForm}>Add new meditation series</button>
            </div>
            {loading === true ? <p>Uploading...</p> : null}
            <ul className='cards'>
                {meditations ?
                    meditations.map((story, i) => {
                        return (
                            <li key={i} className='card' onClick={()=>{
                                openPlayer(story._id)
                            }}>
                                <img src={story.image}/>
                                <span className='narrator'>{story.name}</span>
                            </li>
                        )
                    }) : null
                }
            </ul>
            { showForm === true ? <SeriesForm getAll={getAll} toggleForm={toggleForm} showLoader={showLoader} hideLoader={hideLoader}/> : null}
            { showPlayer === true ? <Player activeStory={activeStory} page={'Meditate'} closePlayer={closePlayer}/> : null}
        </div>
    );
}

export default Meditate;
