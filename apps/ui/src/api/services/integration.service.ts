import { getDataMethod } from "../api";
import { API_HOST } from "../api-host";
import { ROUTES } from '../endpoint';

export const getRepositories = async (service: string, userId: string) => {
    console.log(service)
    let url: string = API_HOST + ROUTES.GET_SERVICE_REPOSITORIES;
    url = url.replace(':service', service).replace(':userId', userId)
    let data = await getDataMethod(url);
    return data.payload;
}
