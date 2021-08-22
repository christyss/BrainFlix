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

  nextVideo = (id) => {
    console.log('CLick');
    let newVideo = this.state.OnplayVideoDetail.find(video => video.id === id)

    this.setState({
      Video: newVideo
    })
  }
  

  render(){
    return (
        <div className="App">
          <Header />
          <VideoOnPlay onPlayVideo={this.state.Video} />
          <Comment comments={this.state.OnPlayVideoComments} />
          <VideoList videoSelection={this.state.OnplayVideoDetail.filter(video => video.id !== this.state.Video.id)} 
          handleClick={this.nextVideo} />
        </div>
      );
    }
  }


export default App;
