import React, { useEffect, useState } from "react";
import { getAllVideos } from "../modules/videoManager";
import VideoList from "./VideoList";
import { SearchForm } from "./SearchForm";
import { VideoForm } from "./VideoForm";

export const StateManager = () => {


    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };



    useEffect(() => {
        getVideos();

    }, []);

    return (
        <div className="App">

            <SearchForm setVideos={setVideos} />
            <VideoForm getVideos={getVideos} />

            <VideoList videos={videos} />

        </div>
    )
}
