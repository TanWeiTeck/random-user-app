import { PaperAirplaneIcon, PlusIcon } from '@heroicons/react/24/solid';

import Avatar from '../assests/Avatar.png';
import Button from './Button';

const UserPanel = () => {
    return (
        <div className="relative h-60 w-full">
            <div className="absolute z-0 h-40 w-full bg-cyan-400"></div>
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-wrap justify-center py-10 md:items-center md:justify-start">
                <img
                    src={Avatar}
                    alt="man_with_spec"
                    className="h-full object-contain"
                />
                <div className="flex flex-wrap items-end justify-center gap-3 md:justify-start">
                    <div className="flex flex-col items-start px-6 text-white">
                        <div className=" text-4xl font-bold">John Doe</div>
                        <div>Last online: 2 days ago</div>
                    </div>
                    <Button icon={<PaperAirplaneIcon />} text="Send Message" />
                    <Button icon={<PlusIcon />} text="Add Friend" secondary />
                </div>
            </div>
        </div>
    );
};

export default UserPanel;
