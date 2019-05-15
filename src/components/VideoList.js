import React from 'react';
import VideoItem from './VideoItem';
const VideoList = (props) => {
    const renderVideos = props.videos.map((v) => {
        return(
            <div className="video-list">
                <VideoItem key={v.etag} handleVideoSelect={props.handleVideoSelect} video={v}/>
            </div>
        )
    })
    
    return <div className="video-list-item">
                {renderVideos}
            </div>
}
export default VideoList;