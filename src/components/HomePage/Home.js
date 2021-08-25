import VideoOnPlay from '../Video/VideoOnPlay';
import Comment from '../Comments/Comment';
import VideoList from '../Video/VideoList';
import {Component} from 'react';
import VideoData from '../../data/videos.json';
import VideoInfoComment from '../../data/video-details.json';
import VideoOnPlayDescription from '../Video/VideoOnPlayDescription';
import './Home.scss';

class Home extends Component{
  state ={
    VideoList: VideoData,
    OnplayVideoDetail: VideoInfoComment,
    Video: VideoInfoComment[0],
    OnPlayVideoComments: VideoInfoComment[0].comments,
  }

  nextVideo = (id) => {
    let newVideo = this.state.OnplayVideoDetail.find(video => video.id === id)

    this.setState({
      Video: newVideo
    })
  }
  

  render(){
    return (
        <div className="Home">
          <VideoOnPlay onPlayVideo={this.state.Video} />
          <div className="container__description-comments-vidlist">
            <div className="container__description-comments">
              <VideoOnPlayDescription onPlayVideo={this.state.Video} />
              <Comment comments={this.state.OnPlayVideoComments} />
            </div>
              <VideoList videoSelection={this.state.OnplayVideoDetail.filter(video => video.id !== this.state.Video.id)} 
              handleClick={this.nextVideo} />
          </div>
        </div>
      );
    }
  }


export default Home;
