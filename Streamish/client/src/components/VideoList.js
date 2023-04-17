import React, { useEffect, useState } from "react";
import Video from './Video';

import { SearchForm } from "./SearchForm";
import { getAllVideos } from "../modules/videoManager";


const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    }
    useEffect(() => {
        getVideos();

    }, []);

    return (
        <div className="container">
            <SearchForm setVideos={setVideos} />
            <div className="row justify-content-center">
                {videos.map((video) => (

                    <Video key={video.id} video={video} />

                ))}
            </div>


        </div>
    );
};

export default VideoList;