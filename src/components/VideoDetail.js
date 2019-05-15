import React from 'react';
const VideoDetail = ({video}) => {
    if(!video) {
        return <div id="video-load" className="video-load">Loading Video</div>;
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>

        <div className="video-detail">
            <iframe className="selected-video" src={videoSource} title="video-player"/>
        </div>
        <div className="video-desc">
            <h3 className="video-title">{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    )
}
export default VideoDetail;