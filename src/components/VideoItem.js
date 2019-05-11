import React from 'react';
const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={ () => {
            handleVideoSelect(video)
        }}
        className="single-video"
        >
            <img src={video.snippet.thumbnails.defailt.url} alt=""/>
            <div className="video-title">{video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem;