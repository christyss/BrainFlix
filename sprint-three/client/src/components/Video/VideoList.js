import React from 'react';
import {Link} from 'react-router-dom';
import './VideoList.scss';

const VideoList = ({videoList}) => {
    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {videoList.map(video => {
                return <Link to={`/videos/${video.id}`} key={video.id}
                         className="videos-container">
                            <div className="videos-container__video">
                                    <img className="videos-container__video-image" 
                                    src={video.image} 
                                    alt={video.title} />
                            </div> 
                            <div className="videos-container__video-info">
                                <h3 className="videos-container__video-info-name">{video.title}</h3>
                                <h4 className="videos-container__video-info-channel">{video.channel}</h4>
                            </div>
                        </Link>  
                })} 
        </section>
    )
}

export default VideoList
