import { useEffect, useState } from "react";
import Video from "./Video";
import { getUserVideos } from "../modules/userManager";
import { useParams } from "react-router-dom";


const UserVideo = () => {
    const [user, setUser] = useState({
        videos: []
    });
    const { id } = useParams();
    const getAllVideos = () => {
        getUserVideos(id).then(user => setUser(user));
    }
    useEffect(() => {
        getAllVideos();

    }, []);

    return (
        <div className="container">

            <div className="row justify-content-center">
                {user.videos.map((video) => (

                    <Video key={video.id} video={video} />

                ))}
            </div>


        </div>
    );
};

export default UserVideo;