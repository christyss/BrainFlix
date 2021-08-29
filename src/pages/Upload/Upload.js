import React from 'react';
import { Link } from 'react-router-dom';
import UploadVideo from '../../assets/Images/Upload-video-preview.jpg';
import './Upload.scss';

function Upload() {
    const handleClick = (event) => {
        alert("👏  Video Uploaded Successfully 👏 ");
    }

    return (
        <form className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__video-container">
                <div className="upload__video">
                    <h3 className="upload__video-sub-title">VIDEO THUMBNAIL</h3>
                    <img className="upload__video-image" src={UploadVideo} alt="Uploading Video" /> 
                </div>
                <div className="upload__input">
                    <h3 className="upload__input-sub-title">TITLE YOUR VIDEO</h3>
                    <textarea className="upload__input-area" type="text" name="input" placeholder="Add a little to your video"/>
                    <h3 className="upload__input-sub-title">ADD A VIDEO DESCRIPTION</h3>
                    <textarea className="upload__input-area--larger" type="text" name="input" placeholder="Add a description of your video"/>
                </div>
            </div>    
            <div className="upload__btn">
                <button className="upload__btn-cancel-tablet">CANCEL</button>
                <Link from="/upload" to="/">
                    <button onClick={handleClick} type="submit" className="upload__btn-upload">PUBLISH</button>
                </Link>
                <button className="upload__btn-cancel">CANCEL</button>

            </div>
        </form>
    )
}

export default Upload
