import {Component} from 'react';
import axios from "axios";
import VideoOnPlay from '../../components/Video/VideoOnPlay';
import VideoOnPlayDescription from '../../components/Video/VideoOnPlayDescription';
import Comment from '../../components/Comments/Comment';
import VideoList from '../../components/Video/VideoList';
import { API_VIDEO, API_KEY } from '../../Utils/API-KEY';
import './Home.scss';

class Home extends Component{
  state ={
    videoList: [],
    selectedVideo: null,
  }

  getVideoDetails = (videoId) =>{
    axios
      .get(`${API_VIDEO}/${videoId}?api_key=${API_KEY}`)
        .then(videoDetails => {
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
  
  render(){
    if (!this.state.selectedVideo) return <p className="upload__loading">Loading...</p>;

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
          </div>
        </div>
      );
    }
}


export default Home;
