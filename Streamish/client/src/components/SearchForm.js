import { useState, useRef } from "react";
import { searchVideos } from "../modules/videoManager";
import { Card, CardBody } from "reactstrap";
export const SearchForm = ({ setVideos }) => {
    const checkboxRef = useRef(null)
    const [userChoices, setUserChoices] = useState({
        searchCriterion: '',
        sortMethod: false
    })

    const handleSubmitSearch = (evt) => {
        evt.preventDefault();
        if (userChoices.searchCriterion) {
            searchVideos(`${userChoices.searchCriterion}`, `${userChoices.sortMethod}`)
                .then((videos) => {
                    setVideos(videos);

                });
        }
        else {
            alert('Search cannot be blank.')
        }
    }

    return (
        <div>
            <Card>
                <p className="text-left px-2">Search Videos Form</p>
                <CardBody>

                    <div>
                        <h2>Search for a video.</h2>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="criterion">Search Parameters: </label>
                                <input
                                    required
                                    id="criterion"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Parameters"

                                    onChange={(event) => {
                                        const copy = { ...userChoices };
                                        copy.searchCriterion = event.target.value;
                                        setUserChoices(copy);
                                    }} />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        ref={checkboxRef}


                                        onChange={(event) => {

                                            const copy = { ...userChoices }
                                            if (checkboxRef.current.checked) {
                                                copy.sortMethod = true;
                                            } else {
                                                copy.sortMethod = false;
                                            }

                                            setUserChoices(copy)
                                        }}
                                    />

                                </label>
                            </div>
                        </fieldset>
                        <button
                            className="btn btn-success"
                            onClick={(event) => {
                                handleSubmitSearch(event)
                            }}>Search</button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
