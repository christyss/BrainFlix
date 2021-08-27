import VideoOnPlay from '../../components/Video/VideoOnPlay';
import Comment from '../../components/Comments/Comment';
import VideoList from '../../components/Video/VideoList';
import {Component} from 'react';
import VideoData from '../../data/videos.json';
import VideoInfoComment from '../../data/video-details.json';
import { API_VIDEO, API_KEY } from '../../Utils/API-KEY';
import VideoOnPlayDescription from '../../components/Video/VideoOnPlayDescription';
import axios from "axios";
import './Home.scss';

class Home extends Component{
  state ={
    // VideoList: VideoData,
    // OnplayVideoDetail: VideoInfoComment,
    // Video: VideoInfoComment[0],
    // OnPlayVideoComments: VideoInfoComment[0].comments,
    videoList: [],
    selectedVideo: null,
  }

  getVideoDetails = (videoId) =>{
    axios
      .get(`${API_VIDEO}/${videoId}?api_key=${API_KEY}`)
        .then(videoDetails => {
          console.log(videoDetails.data);

          this.setState({
            selectedVideo: videoDetails.data
          });

        });
  }

  componentDidMount(){

    const currentVideoId = this.props.match.params.videoId;

    axios
      .get(`${API_VIDEO}/?api_key=${API_KEY}`)
        .then((videoResult) => {
          this.setState({
            videoList: videoResult.data,
          });
          
          const defaultVideo = videoResult.data[0];
          const loadVideoId = currentVideoId ? currentVideoId : defaultVideo.id;

          this.getVideoDetails(loadVideoId);
        })
  }

  componentDidUpdate(prevProps){
    const currentVideoId = this.props.match.params.videoId;
    const prevVideoId = prevProps.match.params.videoId;

    if(currentVideoId !== prevVideoId){
      this.getVideoDetails(currentVideoId);
    }
  }



  // nextVideo = (id) => {
  //   let newVideo = this.state.OnplayVideoDetail.find(video => video.id === id)

  //   this.setState({
  //     Video: newVideo
  //   })
  // }
  

  render(){
    if (!this.state.selectedVideo) return <p>Loading...</p>;

    const filterChosenVideo = this.state.selectedVideo
      ? this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)
      : this.state.videoList;

    return (
        <div className="Home">
          <VideoOnPlay onPlayVideo={this.state.selectedVideo} />
          <div className="container__description-comments-vidlist">
            <div className="container__description-comments">
              <VideoOnPlayDescription onPlayVideo={this.state.selectedVideo} />
              <Comment videoComments={this.state.selectedVideo} />
            </div>
            <VideoList videoList={filterChosenVideo} />
              {/* <VideoList videoSelection={this.state.OnplayVideoDetail.filter(video => video.id !== this.state.Video.id)} 
              handleClick={this.nextVideo} /> */}
          </div>
        </div>
      );
    }
  }


export default Home;
