import config from 'config';
import { fetchWrapper } from '@/_helpers';

const baseUrl = `${config.apiUrl}/Recruitments`;
const applyingUrl = `${config.apiUrl}/AppliedUsers`;


export const recruitingService = {
    getAll,
    getById,
    isUserApplied,
    create,
    put,
    userApplying,
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

function put(params) {
    return fetchWrapper.put(baseUrl, params);
}

function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}

function userApplying(id, userId, docs){
    return fetchWrapper.post(`${applyingUrl}/${id}/${userId}`, docs);
}

function isUserApplied(id) {
    return fetchWrapper.get(`${applyingUrl}/${id}`);
}