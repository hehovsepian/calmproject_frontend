import React, {useState, useEffect, useRef, createRef} from 'react';

function SeriesForm(props) {

    const nameInputRef = useRef(null)
    const imageInputRef = useRef(null)
    const trackList = useRef(null)

    const handleUpload = (e) => {

        e.preventDefault()

        let tracks = []

        let titleInputs = document.querySelectorAll('input[name="title"]')
        let audioInputs = document.querySelectorAll('input[name="audio"]')

        titleInputs.forEach((input, index)=>{
            tracks.push({
                title: input.value,
                audio: audioInputs[index].files[0]
            })
        })


        let formData = new FormData();
        formData.append("name", nameInputRef.current.value)
        formData.append("image", imageInputRef.current.files[0])

        tracks.forEach((track, index) => {
            formData.append('trackTitles[]', track.title);
            formData.append('tracks[]', track.audio);
        });

        props.toggleForm()
        props.showLoader()

        // for (let pair of formData.entries()) {
        //     console.log(pair[0]+ ' - ' + pair[1]);
        // }

        fetch(`/upload_series`, {
            method:'POST',
            body: formData,
        }).then((response) => {
            props.hideLoader()
            props.getAll()
        })
    }

    const handleAddAnother = () => {
        let newContainer = document.createElement('div')
        let newTitleLabel = document.createElement('label')
        let newTitleInput = document.createElement('input')
        let newAudioLabel = document.createElement('label')
        let newAudioInput = document.createElement('input')
        newTitleLabel.innerText = "Title"
        newAudioLabel.innerText = "Audio"
        newTitleInput.setAttribute('type', 'text')
        newTitleInput.setAttribute('name', 'title')
        newAudioInput.setAttribute('type', 'file')
        newAudioInput.setAttribute('name', 'audio')
        newContainer.append(newTitleLabel)
        newContainer.append(newTitleInput)
        newContainer.append(newAudioLabel)
        newContainer.append(newAudioInput)
        trackList.current.append(newContainer)
    }


    return (
        <div className='modal'>
            <form onSubmit={handleUpload}>
                <label>Name</label>
                <input required type="text" ref={nameInputRef}/>
                <label>Image</label>
                <input required type="file" ref={imageInputRef}/>
                <div className="tracks-list" ref={trackList}>
                    <div>
                        <label>Title</label>
                        <input required type="text" name="title"/>
                        <label>Audio</label>
                        <input required type="file" name="audio"/>
                    </div>
                </div>
                <div className='buttons'>
                    <button type="button" onClick={handleAddAnother} >Add another track</button>
                    <button type="button" onClick={props.toggleForm}>Cancel</button>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    );
}

export default SeriesForm