import React from 'react';
import VideoItem from './VideoItem';
const VideoList = (props) => {
    const renderVideos = props.videos.map((v) => {
        return(
            <div>
                <VideoItem key={v.etag} handleVideoSelect={props.handleVideoSelect} video={v}/>
            </div>

        )
    })
    
    return <div>
                {renderVideos}
            </div>
}
export default VideoList;