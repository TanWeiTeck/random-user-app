import { useQuery } from '@tanstack/react-query';

import { createFetchAPI } from '../apiRequest';
import { IUserListParams, IUserLists } from './types';

export const useFetchUserList = (params: IUserListParams) => {
    const endPoint = 'https://randomuser.me/api/';

    const fetchUserListApi = createFetchAPI(endPoint, params);

    const query = useQuery(['userList', params], async () => {
        const data = await fetchUserListApi();
        return data.results as IUserLists;
    });

    return { userLists: query.data, ...query };
};
