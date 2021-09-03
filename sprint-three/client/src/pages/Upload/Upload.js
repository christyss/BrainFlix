import React from 'react';
// import { Link } from 'react-router-dom';
import UploadVideo from '../../assets/Images/Upload-video-preview.jpg';
import axios from "axios";
import { API_VIDEO } from '../../Utils/API-KEY';
import { createRef } from "react";
import './Upload.scss';

const formRef = createRef();

function Upload({history}) {
    console.log(history);
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = formRef.current.title.value;
        const description = formRef.current.description.value;

        axios
            .post(`${API_VIDEO}/videos`, {
                id: "",
                title: title,
                channel: "",
                image: "",
                description: description,
                views: "",
                likes:"",
                duration: "",
                video: "",
                timestamp: "",
                comments: []
            })
            .then(() => (
                history.push("/")
            
            ))
            .catch((err) => {
                console.log(err);
            })

        alert("👏  Video Uploaded Successfully 👏 ");


    }

    return (
        <>
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__video-container">
                <div className="upload__video">
                    <h3 className="upload__video-sub-title">VIDEO THUMBNAIL</h3>
                    <img className="upload__video-image" src={UploadVideo} alt="Uploading Video" /> 
                </div>
                <form className="upload__input" ref={formRef}>
                    <h3 className="upload__input-sub-title">TITLE YOUR VIDEO</h3>
                    <textarea className="upload__input-area" type="text" name="title" placeholder="Add a little to your video"/>
                    <h3 className="upload__input-sub-title">ADD A VIDEO DESCRIPTION</h3>
                    <textarea className="upload__input-area--larger" type="text" name="description" placeholder="Add a description of your video"/>
                </form>
            </div>
                <div className="upload__btn">
                    <button className="upload__btn-cancel-tablet">CANCEL</button>
                    {/* <Link to="/"> */}
                        <button onClick={handleSubmit} type="button" className="upload__btn-upload">PUBLISH</button>
                    {/* </Link> */}
                    <button className="upload__btn-cancel">CANCEL</button>
                </div>
            </section>
          </>
    )
}

export default Upload
