import React, {
    createContext,
    PropsWithChildren,
    useMemo,
    useState,
} from 'react';

import { useFetchUserList } from '../api/userList/index';
import { IUserLists } from '../api/userList/types';

interface IUserListContext {
    userLists?: IUserLists;
    currentPage: string | number;
    pageUpHandler: () => void;
    pageDownHandler: () => void;
    isLoading: boolean;
    refetch: () => void;
    searchQuery: string;
    handleSearchQueryChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

export const UserListContext = createContext<IUserListContext>({
    userLists: [],
    currentPage: 1,
    isLoading: false,
    refetch: () => {},
    pageUpHandler: () => {},
    pageDownHandler: () => {},
    searchQuery: '',
    handleSearchQueryChange: () => {},
});

const UserListContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const { userLists, refetch, isFetching, isRefetching } = useFetchUserList({
        page: currentPage,
        results: 20,
    });
    const isLoading = isFetching || isRefetching;

    const pageUpHandler = () => {
        setCurrentPage(currentPage + 1);
    };

    const pageDownHandler = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchQuery(event.target.value);
    };

    const value = useMemo(
        () => ({
            userLists,
            currentPage,
            pageUpHandler,
            pageDownHandler,
            isLoading,
            refetch,
            searchQuery,
            handleSearchQueryChange,
        }),
        [userLists, currentPage, isLoading, searchQuery]
    );

    return (
        <UserListContext.Provider value={value}>
            {children}
        </UserListContext.Provider>
    );
};

export default UserListContextProvider;
