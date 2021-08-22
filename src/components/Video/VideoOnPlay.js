import View from '../../assets/Images/Icons/Icon-views.svg';
import Like from '../../assets/Images/Icons/Icon-likes.svg';
import './VideoOnPlay.scss';

function VideoOnPlay(props) {
    const video = props.onPlayVideo
    return (
        <section className="video-container">
                <video key={video.id} className="video-container__video" controls src={video.video} poster={video.image}></video>
            <div>
                <h1 className="video-container__title">{video.title}</h1>
            <div>
                <h2 className="video-container__channel">By {video.channel}</h2>
                <h2 className="video-container__date">{video.timestamp}</h2>
            </div>
            <div>
            <div>
                <div className="video-container__views">
                <img className="video-container__views-icon" src={View} alt="Views" />
                <h2 className="video-container__views-number">{video.views}</h2>
            </div>
            <div className="video-container__likes">
                <img className="video-container__likes-icon" src={Like} alt="Likes" />
                <h2 className="video-container__likes-number">{video.likes}</h2>
            </div>
            </div>
            </div>
            <article className="video-container__description">
                <p className="video__description">{video.description}</p>
            </article>
            </div>
        </section>
    )}

export default VideoOnPlay;
