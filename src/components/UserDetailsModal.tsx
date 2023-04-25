import React, { useCallback, useContext, useMemo } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { ModalContext } from '../contexts/ModalContext';
import { formatDate } from '../utilsFuctions';

const UserDetailsModal = () => {
    const { showModal, closeModal, data } = useContext(ModalContext);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    const {
        dob,
        email,
        gender,
        id,
        location,
        name: nameObj,
        phone,
        picture,
    } = data || {};

    const address = useMemo(() => {
        const { street, city, postcode, state, country } = location || {};

        const addressKeys = {
            streetNumber: street?.number || null,
            streetName: street?.name || null,
            postcode,
            city,
            state,
            country,
        };

        const finalAddress = Object.values(addressKeys)
            .map((item) => {
                if (item) return item;
            })
            .join(', ');

        return <div>{finalAddress}</div>;
    }, [location]);

    const name = useMemo(() => {
        const { title, first, last } = nameObj || {};
        return `${title} ${first} ${last}`;
    }, [nameObj]);

    const renderDetail = useCallback(
        (key: string, value: string | number | JSX.Element) =>
            value && (
                <div className="flex w-full text-start">
                    <span className="w-[150px] text-gray-400">{key}</span>
                    <span className="max-w-xs">{value}</span>
                </div>
            ),
        []
    );

    return (
        data && (
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50  ${
                    showModal ? '' : 'hidden'
                }`}
                onClick={handleBackdropClick}
            >
                <div
                    className={`relative flex flex-col items-start gap-y-4 rounded-lg bg-white p-8 text-xs`}
                >
                    <XMarkIcon
                        className="absolute right-0 top-0 m-2 h-4 cursor-pointer"
                        onClick={() => closeModal()}
                    />
                    <div
                        className="flex items-center gap-4 
                    "
                    >
                        <img
                            src={picture.medium}
                            alt={`${name}_profile_pic`}
                            className="rounded-md border shadow-card"
                        />
                        <div className="flex flex-col items-start">
                            <span className="text-3xl font-semibold">
                                {name}
                            </span>
                            <span>{email}</span>
                        </div>
                    </div>

                    {renderDetail('Age', dob.age)}
                    {renderDetail('Date of birth', formatDate(dob.date))}
                    {renderDetail('Gender', gender)}
                    {renderDetail('Contact', phone)}
                    {renderDetail('ID', `${id.name}${id.value}`)}
                    {renderDetail('Address', address)}
                </div>
            </div>
        )
    );
};

export default UserDetailsModal;
