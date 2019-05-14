import React from 'react';
import './App.css';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const ApiKey = 'AIzaSyBucCifjcZm6dGx1Lt0nyF0X9t07X-w_S0';

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
        <div className="search-bar">
          {/* <SearchBar handleSearchSubmit={s => this.videoSearch(s)}/> */}
          <SearchBar
          // searchValue={this.state.search}
          handleSubmit={this.videoSearch}
          />
        </div>
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
    )
  }
  videoSearch(e,search) {
    console.log("search function", search);
    YoutubeSearch({key:ApiKey, term: search}, (data) => {
      console.log("syoutube search data", data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  // handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("this is e", e);
  //   this.setState({
  //       search: this.state.search
  //   })
  // }

}
export default App;