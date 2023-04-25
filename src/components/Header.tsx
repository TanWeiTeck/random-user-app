import {
    ArrowRightOnRectangleIcon,
    BellAlertIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline';

import Logo from '../assests/Logo.png';

const Header_Icon = 'cursor-pointer text-gray-500 hover:text-gray-800';

const Header = () => {
    return (
        <div className="sticky top-0 z-20 mx-auto h-24 w-full shadow-sm backdrop-blur-md">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
                <img
                    src={Logo}
                    alt="kira_tech_logo"
                    className="h-full object-contain p-5"
                />
                <div className="flex h-10 gap-4 p-2">
                    <BellAlertIcon className={Header_Icon} />
                    <Cog6ToothIcon className={Header_Icon} />
                    <ArrowRightOnRectangleIcon className={Header_Icon} />
                </div>
            </div>
        </div>
    );
};

export default Header;
