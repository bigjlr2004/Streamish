import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos } from "../modules/videoManager";

const VideoList = ({ videos }) => {


    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos.map((video) => (
                    <Video key={video.id} video={video} />

                ))}
            </div>

            <div></div>
        </div>
    );
};

export default VideoList;