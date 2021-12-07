import React, {useState, useEffect, useRef} from 'react';
import Player from "./Player";

function Featured(props) {

    const [featured, setFeatured] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)

    const getFeatured = () => {
        let id = "61af954725588841b7cbeafe"
        fetch(`/one_meditation/id/${id}`,)
            .then(response => response.json())
            .then(data => setFeatured(data));
    }

    useEffect(getFeatured, [])

    const getDate = () => {
        let date = new Date(featured.dateCreated)
        return new Intl.DateTimeFormat('en-US',  { month: 'long', day: 'numeric'}).format(date)
    }

    const openPlayer = (id) => {
        setShowPlayer(true)
    }

    const closePlayer = () => {
        setShowPlayer(false)
    }

    return (
        <div className="featured page">
            <div className='page-header'>
                <h1>Featured</h1>
            </div>
            {
                featured ?
                    <div className='card featured' onClick={openPlayer}>
                        <div className="image">
                            <img src={featured.image}/>
                        </div>
                        <div className='card-content'>
                            <div className='title'>
                                <span>{featured.name}</span>
                                <span>{getDate()}</span>
                            </div>
                            <svg height="32" width="32" color="#14141499" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 96 96">
                                <path
                                    d="M72.786 44.077l-.991 1.737L27.26 20.401a3.108 3.108 0 0 0-3.046-.005c-.926.524-1.5 1.5-1.5 2.536v50.136c0 1.028.57 2 1.485 2.525a3.094 3.094 0 0 0 3.03.023l44.534-24.723a2.935 2.935 0 0 0 1.522-2.532 2.928 2.928 0 0 0-1.49-2.546l.991-1.738zm4.5 4.307a6.935 6.935 0 0 1-3.58 6.006L29.168 79.113a7.096 7.096 0 0 1-6.959-.05 6.934 6.934 0 0 1-3.495-5.995V22.932a6.933 6.933 0 0 1 3.53-6.017 7.108 7.108 0 0 1 6.997.012L73.777 42.34a6.928 6.928 0 0 1 3.508 6.044z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </div>

                    </div> : null
            }
            { showPlayer === true ? <Player activeStory={featured._id} page={'Meditate'} closePlayer={closePlayer}/> : null}
        </div>
    );
}

export default Featured;