import config from 'config';
import { fetchWrapper } from '@/_helpers';

export const uploadService = {
    getById,
    upload,
    download
};

function getById(id){
    const baseUrl = `${config.apiUrl}/FileUpload/${id}`
    return fetchWrapper.get(baseUrl);
}


function upload(data, id) {
    const baseUrl = `${config.apiUrl}/FileUpload/${id}`

    return fetchWrapper.upload(baseUrl, data);
}

function download(id) {
    const baseUrl = `${config.apiUrl}/FileUpload/download/${id}`

    return fetchWrapper.download(baseUrl);
}