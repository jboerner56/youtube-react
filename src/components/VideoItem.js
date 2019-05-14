import React from 'react';
const VideoItem = (props) => {
    const video = props.video;
    const handleVideoSelect = props.handleVideoSelect;
    const videoThumbnail = video.snippet.thumbnails.default.url;
    return (
        <div>
            <p onClick={() => handleVideoSelect(video)} className="video-item">
                <img src={videoThumbnail} alt=""/>
                <div className="video-title">{video.snippet.title}</div>
            </p>
        </div>
    )
}

export default VideoItem;