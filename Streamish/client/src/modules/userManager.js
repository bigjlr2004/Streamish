const baseUrl = '/api/userProfile/';

export const getUserVideos = (id) => {
    return fetch(`${baseUrl}GetByIdWithVideos/${id}`).then((res) => res.json());

};