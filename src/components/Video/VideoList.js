import './VideoList.scss';

function VideoList(props) {
    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {props.videoSelection.map(video => {
                return  <div key={video.id} className="videos-container">
                            <div className="videos-container__video">
                                <img className="videos-container__video-image" 
                                src={video.image} 
                                alt={video.title} 
                                onClick={() => props.handleClick(video.id)} />
                            </div> 
                            <div className="videos-container__video-info">
                                <h3 className="videos-container__video-info-name">{video.title}</h3>
                                <h4 className="videos-container__video-info-channel">{video.channel}</h4>
                            </div>
                        </div>
            })} 
        </section>
    )
}

export default VideoList
