import config from 'config';
import { fetchWrapper } from '@/_helpers';

const baseUrl = `${config.apiUrl}/Recruitments`;


export const recruitingService = {
    getAll,
    getById,
    create,
    delete: _delete,
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}