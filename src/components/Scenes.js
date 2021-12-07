import React, {useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import SingleTrackForm from "./SingleTrackForm";

function Scenes(props) {

    const [scenes, setScenes] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)

    const getAll = () => {
        fetch('/all_scenes')
            .then(response => response.json())
            .then((data) => {
                let sortedData = data.sort(function(a,b){
                    return new Date(a.dateCreated) - new Date(b.dateCreated)
                });
                setScenes(sortedData)
            })
    }

    useEffect(getAll, [])

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const showLoader = () => {
        setLoading(true)
    }

    const hideLoader = () => {
        setLoading(false)
    }

    const handleSetScene = (id) => {
        fetch(`/one_scene/id/${id}`,)
            .then(response => response.json())
            .then(data => {props.setScene(data)})
    }

    return (
        <div className="scenes page">
            <div className='page-header'>
                <h1>Scenes</h1>
                <button className='primary' onClick={toggleForm}>Add new scene</button>
            </div>
            {loading === true ? <p>Uploading...</p> : null}
            <ul className='cards'>
                {scenes ?
                    scenes.map((story, i) => {
                        return (
                            <li key={i} className='card' onClick={()=>{
                                handleSetScene(story._id)
                            }}>
                                <img src={story.image}/>
                                <span className='narrator'>{story.name}</span>
                            </li>
                        )
                    }) : null
                }
            </ul>
            { showForm === true ? <SingleTrackForm getAll={getAll} page={'Scenes'} toggleForm={toggleForm} showLoader={showLoader} hideLoader={hideLoader}/> : null}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setScene: (scene) => dispatch({type: 'SET_SCENE', scene:scene}),
});

export default connect(
    null,
    mapDispatchToProps
)(Scenes);