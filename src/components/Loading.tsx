import { ArrowPathIcon } from '@heroicons/react/24/solid';

const Loading = () => {
    return (
        <div className="absolute right-0 top-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-sm">
            <ArrowPathIcon className="h-10 animate-spin" />
        </div>
    );
};

export default Loading;
