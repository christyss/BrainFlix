import View from '../../assets/Images/Icons/Icon-views.svg';
import Like from '../../assets/Images/Icons/Icon-likes.svg';
import videoDate from '../../Utils/timestamp-function';
import './VideoOnPlay.scss';

const VideoOnPlayDescription = ({onPlayVideo}) => {
    return (
        <section className="video-container">
            <div className="video-container__video-details">
                <h1 className="video-container__title">{onPlayVideo.title}</h1>
                <div className="video-container__all-info">
                    <div className="video-container__info">
                        <h2 className="video-container__info-channel">By {onPlayVideo.channel}</h2>
                        <h2 className="video-container__info-date">{videoDate(onPlayVideo.timestamp)}</h2>
                    </div>
                    <div className="video-container__views-likes">
                        <div className="video__views">
                            <img className="video__views-icon" src={View} alt="Views" />
                            <h2 className="video__views-number">{onPlayVideo.views}</h2>
                        </div>
                        <div className=" video__likes">
                            <img className="video__likes-icon" src={Like} alt="Likes" />
                            <h2 className="video__likes-number">{onPlayVideo.likes}</h2>
                        </div>
                    </div>
                </div>
            </div>
                <article className="video-container__description">
                    <p className="video-container__description-text">{onPlayVideo.description}</p>
                </article>
        </section>
    )}

export default VideoOnPlayDescription;