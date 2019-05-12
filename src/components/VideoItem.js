import React from 'react';
const VideoItem = (props) => {
    const video = props.video;
    const userSelected = props.userSelected;
    const videoThumbnail = video.snippet.thumbnails.default.url;
    return (
        <div>
            <li onClick={() => userSelected(video)} className="video-item">
                <img src={videoThumbnail} alt=""/>
                <div className="video-title">{video.snippet.title}</div>
            </li>
        </div>
    )
}

export default VideoItem;