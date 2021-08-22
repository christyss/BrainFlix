import Header from './components/Header/Header';
import VideoOnPlay from './components/Video/VideoOnPlay';
import Comment from './components/Comments/Comment';
import VideoList from './components/Video/VideoList';
import {Component} from 'react';
import VideoData from './data/videos.json';
import VideoInfoComment from './data/video-details.json';

class App extends Component{
  state ={
    VideoList: VideoData,
    OnplayVideoDetail: VideoInfoComment,
    Video: VideoInfoComment[0],
    OnPlayVideoComments: VideoInfoComment[0].comments,
  }
  

  render(){
    return (
        <div className="App">
          <Header />
          <VideoOnPlay onPlayVideo={this.state.Video} />
          <Comment comments={this.state.OnPlayVideoComments} />
          <VideoList videoSelection={this.state.VideoList} />
        </div>
      );
    }
  }


export default App;
