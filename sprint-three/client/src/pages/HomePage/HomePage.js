import {Component} from 'react';
import axios from "axios";
import VideoOnPlay from '../../components/Video/VideoOnPlay';
import VideoOnPlayDescription from '../../components/Video/VideoOnPlayDescription';
import Comment from '../../components/VideoComments/VideoComments';
import VideoList from '../../components/Video/VideoList';
import { API_VIDEO } from '../../Utils/API-KEY';
import './HomePage.scss';

class HomePage extends Component{
  state ={
    videoList: [],
    selectedVideo: null,
  }

  getVideoDetails = (videoId) =>{
    axios
      .get(`${API_VIDEO}/videos/${videoId}`)
        .then(videoDetails => {
          this.setState({
            selectedVideo: videoDetails.data
          });
        })
        .catch((err) => {
          console.log(`Error from getVideoDetails ${err}`);
        });
  }

  componentDidMount(){

    const currentVideoId = this.props.match.params.videoId;

    if (currentVideoId){
      this.getVideoDetails(currentVideoId);
    }

    return axios
      .get(`${API_VIDEO}/videos`)
        .then((videoResult) => {
          this.setState({
            videoList: videoResult.data,
            selectedVideo: videoResult.data[0]
          });
        })
        .catch((err) => {
          console.log(`Error from getAllVideos ${err}`);
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
    console.log(this.state.selectedVideo);
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


export default HomePage;
