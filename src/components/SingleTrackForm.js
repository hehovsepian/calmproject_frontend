import React, {useState, useEffect, useRef} from 'react';

function SingleTrackForm(props) {

    const nameInputRef = useRef(null)
    const narratorInputRef = useRef(null)
    const durationInputRef = useRef(null)
    const imageInputRef = useRef(null)
    const audioInputRef = useRef(null)
    const videoInputRef = useRef(null)


    const handleUpload = (e) => {

        e.preventDefault()

        let formData = new FormData();
        formData.append("category", props.page)
        formData.append("name", nameInputRef.current.value)
        if(narratorInputRef.current){
            formData.append("narrator", narratorInputRef.current.value)
        }else{
            formData.append("narrator", "")
        }
        if(durationInputRef.current){
            formData.append("duration", durationInputRef.current.value)
        }else{
            formData.append("duration", "")
        }
        formData.append("image", imageInputRef.current.files[0])
        formData.append("audio", audioInputRef.current.files[0])
        if(videoInputRef.current){
            formData.append("video", videoInputRef.current.files[0])
        }else{
            formData.append("video", "")
        }

        props.toggleForm()
        props.showLoader()

        fetch(`/upload_single`, {
            method:'POST',
            body: formData,
        }).then((response) => {
                props.hideLoader()
                props.getAll()
            })
    }

    return (
        <div className='modal transparent-background'>
            <form onSubmit={handleUpload}>
                <label>Name</label>
                <input required type="text" ref={nameInputRef}/>
                {
                    props.page === 'Sleep' || props.page === 'Body' ? <>
                        <label>Narrator</label>
                        <input required type="text" ref={narratorInputRef}/>
                        <label>Duration</label>
                        <input required type="text" ref={durationInputRef}/>
                    </> : null
                }
                <label>Image</label>
                <input required type="file" ref={imageInputRef}/>
                <label>Audio</label>
                <input required type="file" ref={audioInputRef}/>
                {
                    props.page === 'Scenes'? <>
                        <label>Video</label>
                        <input required type="file" ref={videoInputRef}/>
                    </> : null
                }
                <div className='buttons'>
                    <button onClick={props.toggleForm}>Cancel</button>
                    <button type="submit">Upload</button>
                </div>

            </form>
        </div>
    );
}

export default SingleTrackForm
