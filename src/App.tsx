import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import { defaultFetchSettings } from './api/apiRequest';
import ModalContextProvider from './contexts/ModalContext';
import UserListContextProvider from './contexts/UserListContext';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: { queries: defaultFetchSettings },
    });

    return (
        <div className="App">
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <ModalContextProvider>
                        <UserListContextProvider>
                            <AppRoutes />
                        </UserListContextProvider>
                    </ModalContextProvider>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
