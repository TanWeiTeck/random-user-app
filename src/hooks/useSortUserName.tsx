import { IUserLists } from '../api/userList/types';

const useSortUserName = () => {
    const sortAccending = (data: IUserLists) =>
        data?.slice().sort((a, b) => (a.name.first > b.name.first ? 1 : -1));

    const sortDecending = (data: IUserLists) =>
        data?.slice().sort((a, b) => (a.name.first < b.name.first ? 1 : -1));

    return { sortAccending, sortDecending };
};

export default useSortUserName;
