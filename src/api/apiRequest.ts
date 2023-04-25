import axios from 'axios';

export const defaultFetchSettings = {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
};

export const createFetchAPI = <ParamsType>(
    endPoint: string,
    params: ParamsType
) => {
    return async () => {
        try {
            const response = await axios.get(endPoint, { params });

            return response.data;
        } catch (error) {
            console.log('error', error);
        }
    };
};
