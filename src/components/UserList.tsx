import { useContext, useMemo, useState } from 'react';

import {
    ArrowLongDownIcon,
    ArrowLongUpIcon,
    ArrowsUpDownIcon,
} from '@heroicons/react/24/outline';

import { IUser, IUserLists } from '../api/userList/types';
import { UserListContext } from '../contexts/UserListContext';
import useSortUserName from '../hooks/useSortUserName';
import Loading from './Loading';
import UserCard from './UserCard';

const UserList = () => {
    const { userLists, isLoading, searchQuery } = useContext(UserListContext);
    const { sortAccending, sortDecending } = useSortUserName();
    const [sort, setSort] = useState<'ascending' | 'decending' | null>(null);

    const sortedUserList = useMemo(() => {
        let filteredList = userLists as IUserLists;

        if (userLists && searchQuery) {
            filteredList = filteredList.filter((user: IUser) =>
                `${user.name?.first}${user.name?.last}`
                    .toLowerCase()
                    .includes(searchQuery.replace(/\s+/g, '').toLowerCase())
            );
        }

        switch (sort) {
            case 'ascending': {
                return sortAccending(filteredList);
            }
            case 'decending': {
                return sortDecending(filteredList);
            }
            default:
                return filteredList;
        }
    }, [sort, userLists, searchQuery]);

    const renderSortIcon = useMemo(() => {
        switch (sort) {
            case 'ascending': {
                return (
                    <ArrowLongDownIcon
                        className="h-full cursor-pointer text-cyan-400"
                        onClick={() => setSort('decending')}
                    />
                );
            }
            case 'decending': {
                return (
                    <ArrowLongUpIcon
                        className="h-full cursor-pointer text-red-500"
                        onClick={() => setSort(null)}
                    />
                );
            }
            default:
                return (
                    <ArrowsUpDownIcon
                        className="h-full cursor-pointer"
                        onClick={() => setSort('ascending')}
                    />
                );
        }
    }, [sort]);

    return (
        <table className="w-full max-w-7xl table-auto border-separate border-spacing-y-4 text-sm text-gray-400">
            <thead>
                <tr>
                    <th align="left" className="flex items-center gap-1 pl-5">
                        Registered On
                    </th>
                    <th align="left" className="w-72">
                        <div className="flex items-center gap-2">
                            <span className="inline-block ">Name</span>
                            <div className="flex h-4">{renderSortIcon}</div>
                        </div>
                    </th>
                    <th align="left">Gender</th>
                    <th align="left">Country</th>
                    <th align="right" className="pr-5">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody className="relative">
                {isLoading && (
                    <tr>
                        <td>
                            <Loading />
                        </td>
                    </tr>
                )}
                {sortedUserList &&
                    sortedUserList?.map((user: IUser) => (
                        <UserCard user={user as IUser} />
                    ))}
            </tbody>
        </table>
    );
};

export default UserList;
