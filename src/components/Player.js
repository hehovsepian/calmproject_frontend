import React, {useState, useEffect, useRef} from 'react';

function Player(props) {

    const [storyData, setStoryData] = useState(null)
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [selectedAudio, setSelectedAudio] = useState(null)

    const getSingleObject = () => {
        let id = props.activeStory
        let category = props.page
        if(category === "Sleep"){
            fetch(`/one_sleepstory/id/${id}`,)
                .then(response => response.json())
                .then(data => setStoryData(data));
        }else if(category === "Body"){
            fetch(`/one_bodytrack/id/${id}`,)
                .then(response => response.json())
                .then(data => setStoryData(data));
        }else if(category === "Meditate"){
            fetch(`/one_meditation/id/${id}`,)
                .then(response => response.json())
                .then(data => setStoryData(data));
        }
    }

    useEffect(getSingleObject,[])

    const handleSelectTrack = (index) => {
        setSelectedTrack(storyData.tracks[index].title)
        setSelectedAudio(storyData.tracks[index].audio)
    }

    return (
        <div className='player'>
            <button onClick={props.closePlayer}>
                <svg height="32" width="32" className="AudioSessionPlayer__BackButton-ae6l4y-12 cvQZxx"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                    <path fill="white" d="M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82" fillRule="evenodd"></path>
                </svg>
            </button>
            <div className='info'>

            {
                storyData != null ? <>
                    <div className='circle-image'>
                        <img src={storyData.image}/>
                    </div>
                    <p className='name'>{storyData.name}</p>
                </> : null
            }

            {
                props.page === 'Meditate' ? <>
                    {
                        storyData ? <ul className='series-list'>
                            {
                                storyData.tracks ? storyData.tracks.map((track, index)=>{
                                    return (
                                        <li key={index}>
                                            <button
                                                className={selectedTrack === track.title ? 'active' : ''}
                                                onClick={()=>{handleSelectTrack(index)}}
                                            >{track.title}</button>
                                        </li>
                                    )
                                }) : null
                            }
                        </ul> : null
                    }
                    {
                       selectedTrack ? <audio controls src={selectedAudio} title={selectedTrack}/> : null
                    }
                </> : <>
                    {
                        storyData != null ? <>
                            <div className='author-info'>
                                <div>
                                    <label>narrator</label>
                                    <p>{storyData.narrator}</p>
                                </div>
                                <div>
                                    <label>duration</label>
                                    <p>{storyData.duration}</p>
                                </div>
                            </div>
                            {
                                storyData.audio ? <audio controls src={storyData.audio} title={storyData.name}/> : null
                            }
                        </> : null
                    }
                </>
            }

            </div>

        </div>
    );
}

export default Player
