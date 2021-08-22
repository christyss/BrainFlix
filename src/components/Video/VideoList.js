import './VideoList.scss';

function VideoList(props) {
    return (
        <section>
            <h2>NEXT VIDEO</h2>
            {props.videoSelection.map(video => {
                return  <div className="videos-container">
                            <div>
                                <img className="video__image" src={video.image} />
                            </div> 
                            <div>
                                <h3 className="video__name">{video.title}</h3>
                                <h4 className="video__channel">{video.channel}</h4>
                            </div>
                        </div>
            })} 
        </section>
    )
}

export default VideoList
