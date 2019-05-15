import React from 'react';
import './App.css';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// const ApiKey = 'AIzaSyBucCifjcZm6dGx1Lt0nyF0X9t07X-w_S0';
const ApiKey = 'AIzaSyAnQCdhcuhkK7ghSTk6vJwURF4BTyE8P-s';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  render () {
    return (

      <div className="App">
      <div className="title">
        <h1>Creative Title Under Construction</h1>
      </div>
        <div className="search-bar">
          <SearchBar
          handleSubmit={this.videoSearch}
          />
        </div>
        <div className="pre-load">
          <h3>For Your viewing pleasure before you search</h3>
          <iframe title="gif" src="https://giphy.com/embed/ND6xkVPaj8tHO" width="480" height="446" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-money-cash-ND6xkVPaj8tHO">{null}</a></p>
        </div>
        <div className="video-list">
          <div className="video-detail">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="video-list">
            <VideoList videos={this.state.videos} 
            handleVideoSelect={selected => this.setState({
              selectedVideo: selected 
            })}/>
          </div>
        </div>
      </div>
    )
  }
  videoSearch = (search) => {
    console.log("search function", search);
    YoutubeSearch({key:ApiKey, term: search}, (data) => {
      console.log("youtube search data", data)
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
    console.log(YoutubeSearch);
    
  }
}
export default App;