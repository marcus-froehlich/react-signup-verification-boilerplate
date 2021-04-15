import config from 'config';
import { fetchWrapper } from '@/_helpers';

const baseUrl = `${config.apiUrl}/QuickUserDocuments`;
const deletUrl = `${config.apiUrl}/FileUpload`

export const documentService = {
    get,
    create,
    put,
    delete: _delete,
};

function get(id) {
    return fetchWrapper.get(baseUrl);
}

function create(params, id) {
    return fetchWrapper.post(`${baseUrl}/${id}`, params);
}

function put(params) {
    return fetchWrapper.put(baseUrl, params);
}

function _delete(id) {
    return fetchWrapper.delete(`${deletUrl}/${id}`);
}