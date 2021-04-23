import config from 'config';
import { fetchWrapper } from '@/_helpers';

const baseUrl = `${config.apiUrl}/Department`;

export const globalService = {
    isSet
};

function isSet() {
    return fetchWrapper.get(baseUrl);
}