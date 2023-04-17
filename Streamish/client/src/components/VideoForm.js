import React, { useState } from "react"
import { Card, CardBody } from "reactstrap";
import { addVideo } from "../modules/videoManager";
import { useNavigate } from 'react-router-dom'

const VideoForm = () => {
    const navigate = useNavigate();
    const [video, setUserVideo] = useState({
        title: "",
        description: "",
        url: ""
    })

    const handleSubmitVideo = (evt) => {
        evt.preventDefault();
        if (video.url && video.title) {
            addVideo(video)
                .then(() => {
                    const copy = { ...video };
                    copy.title = "";
                    copy.description = "";
                    copy.url = "";
                    setUserVideo(copy);
                    navigate('/')


                });
        }
        else {
            alert('Search cannot be blank.')
        }
    }
    return (
        <div className="container">
            <Card>
                <p className="text-left px-2">New Video Form</p>
                <CardBody>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="Title">Video Title: </label>
                            <input
                                required
                                id="Title"
                                type="text"
                                value={video.title}
                                className="form-control"
                                placeholder="Video Title"

                                onChange={(event) => {
                                    const copy = { ...video };
                                    copy.title = event.target.value;
                                    setUserVideo(copy);
                                }} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="Description">Video Description: </label>
                            <input
                                required
                                id="Description"
                                value={video.description}
                                type="text"
                                className="form-control"
                                placeholder="Video Description"

                                onChange={(event) => {
                                    const copy = { ...video };
                                    copy.description = event.target.value;
                                    setUserVideo(copy);
                                }} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="Url">Video Url: </label>
                            <input
                                required
                                value={video.url}
                                id="Url"
                                type="text"
                                className="form-control"
                                placeholder="Video Url"

                                onChange={(event) => {
                                    const copy = { ...video };
                                    copy.url = event.target.value;
                                    setUserVideo(copy);
                                }} />
                        </div>
                    </fieldset>
                    <button
                        className="btn btn-success"
                        onClick={(event) => {
                            handleSubmitVideo(event)
                        }}>Submit Video</button>

                </CardBody>
            </Card>
        </div>
    )
}

export default VideoForm;
