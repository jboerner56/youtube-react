import React from 'react';
const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading Video</div>;
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>

        <div className="video-detail">
            <iframe src={videoSource} title="video-player"/>
        </div>
        <div className="video-desc">
            <h3 className="video-title">{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    )
}
export default VideoDetail;