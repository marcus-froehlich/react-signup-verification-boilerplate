import config from 'config';
import { fetchWrapper } from '@/_helpers';

const baseUrl = `${config.apiUrl}/Department`;

export const departmentService = {
    getAll,
    get,
    create,
    put,
    delete: _delete,
}

function getAll() {
    return fetchWrapper.get(`${baseUrl}/GetAll`);
}

function get(id) {
    return fetchWrapper.get(baseUrl);
}

function create(params) {
    return fetchWrapper.post(`${baseUrl}`, params);
}

function put(params) {
    return fetchWrapper.put(baseUrl, params);
}

function _delete(id) {
    return fetchWrapper.delete(`${deletUrl}/${id}`);
}