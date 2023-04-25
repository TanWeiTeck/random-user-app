import { useContext, useState } from 'react';

import {
    ArrowPathIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { UserListContext } from '../contexts/UserListContext';
import Button from './Button';

const ListControl = () => {
    const { refetch, isLoading, handleSearchQueryChange } =
        useContext(UserListContext);
    const [showInput, setShowInput] = useState(false);

    const handleClick = () => {
        setShowInput(true);
        document
            .querySelector<HTMLInputElement>(`input[name=searchName]`)
            ?.focus();
    };

    return (
        <div className="flex h-10 w-full max-w-7xl justify-between">
            <Button
                secondary
                text="Refresh"
                onClick={refetch}
                icon={
                    <ArrowPathIcon
                        className={`${isLoading ? 'animate-spin' : ''}`}
                    />
                }
                disabled={isLoading}
            />
            <div
                className={`flex h-10 p-2 ${
                    showInput ? 'border' : 'border-none'
                } items-center rounded-full`}
            >
                <input
                    type="text"
                    placeholder="Search Name"
                    className={`bg-transparent outline-none  ${
                        showInput ? 'w-52 px-3' : 'w-0'
                    } duration-300 ease-in-out`}
                    onChange={handleSearchQueryChange}
                    name="searchName"
                />
                <button onClick={handleClick}>
                    <MagnifyingGlassIcon className="h-5" />
                </button>
            </div>
        </div>
    );
};

export default ListControl;
