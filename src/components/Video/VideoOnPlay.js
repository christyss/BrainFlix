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
        </section>
    )}

export default VideoOnPlay;
