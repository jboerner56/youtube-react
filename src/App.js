import React from 'react';
import './App.css';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// import YoutubeApi from './YoutubeApi';
const ApiKey = 'AIzaSyBucCifjcZm6dGx1Lt0nyF0X9t07X-w_S0';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('lacrosse');
  }
  render () {
    return (

      <div className="App">
      <div className="search-bar">
        <SearchBar handleFormSubmit={this.handleSubmit}/>
      </div>
      <div className="video-detail">
      <VideoDetail/>
      </div>
      <div className="video-list">
        <VideoList videos={this.state.videos}/>
      </div>
      </div>
    )
  }
  videoSearch(search) {
    YoutubeSearch({key:ApiKey, term: search}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
}
export default App;
