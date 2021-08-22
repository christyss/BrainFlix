import View from '../../assets/Images/Icons/Icon-views.svg';
import Like from '../../assets/Images/Icons/Icon-likes.svg';
import './VideoOnPlay.scss';

const VideoOnPlay = (props) => {
    const video = props.onPlayVideo
    return (
        <section className="video-container">
            <div className="video-container__video">
                <video 
                key={video.id} 
                className="video-container__video-onplay" controls 
                src={video.video} poster={video.image}>
                </video>
            </div>
            <div className="video-container__video-details">
                <h1 className="video-container__title">{video.title}</h1>
                <div className="video-container__all-info">
                    <div className="video-container__info">
                        <h2 className="video-container__info-channel">By {video.channel}</h2>
                        <h2 className="video-container__info-date">{video.timestamp}</h2>
                    </div>
                    <div className="video-container__views-likes">
                        <div className="video__views">
                            <img className="video__views-icon" src={View} alt="Views" />
                            <h2 className="video__views-number">{video.views}</h2>
                        </div>
                        <div className=" video__likes">
                            <img className="video__likes-icon" src={Like} alt="Likes" />
                            <h2 className="video__likes-number">{video.likes}</h2>
                        </div>
                    </div>
                </div>
            </div>
                <article className="video-container__description">
                    <p className="video-container__description-text">{video.description}</p>
                </article>
        </section>
    )}

export default VideoOnPlay;
