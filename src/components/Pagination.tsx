import { useContext } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { UserListContext } from '../contexts/UserListContext';

const Pagination = () => {
    const { currentPage, pageDownHandler, pageUpHandler } =
        useContext(UserListContext);

    return (
        <>
            <div className="flex h-7 w-full items-center justify-center gap-4 py-10">
                <button onClick={pageDownHandler}>
                    <ChevronLeftIcon
                        className={`h-6 rounded-full p-1 hover:bg-gray-100 ${
                            currentPage === 1
                                ? 'cursor-not-allowed text-gray-400'
                                : ''
                        }`}
                    />
                </button>
                <span>{currentPage}</span>
                <button onClick={pageUpHandler}>
                    <ChevronRightIcon className="h-6 rounded-full p-1 hover:bg-gray-100" />
                </button>
            </div>
        </>
    );
};

export default Pagination;
