import './VideoOnPlay.scss';

const VideoOnPlay = ({onPlayVideo}) => {

    return (
        <section className="video-container">
            <div className="video-container__video">
                <video 
                key={onPlayVideo.id} 
                className="video-container__video-onplay" controls 
                src={onPlayVideo.video} poster={onPlayVideo.image}>
                </video>
            </div>
        </section>
    )}

export default VideoOnPlay;
