import { PropsWithChildren } from 'react';

import Header from '../components/Header';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="animate-bgFlow bg-gradient-to-r from-orange-50 via-white to-cyan-50 bg-x4">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
