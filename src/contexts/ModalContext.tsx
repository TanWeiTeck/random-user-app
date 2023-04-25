import { createContext, PropsWithChildren, useState } from 'react';

interface IModalContext {
    showModal: boolean;
    data: any;
    openModal: (data: any) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    data: null,
    openModal: () => {},
    closeModal: () => {},
});

const ModalContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);

    const openModal = (data: any) => {
        setData(data);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setData(null);
    };

    const value = {
        showModal,
        data,
        openModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export default ModalContextProvider;
