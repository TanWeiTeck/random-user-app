import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './layouts/Layout';

const UserList = lazy(() => import('./pages/UserListing'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route path="/" element={<Navigate to={'userlist'} />} />
                    <Route path="/userlist" element={<UserList />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
