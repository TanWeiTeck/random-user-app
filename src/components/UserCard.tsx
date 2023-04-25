import { useContext } from 'react';

import { IUser } from '../api/userList/types';
import { ModalContext } from '../contexts/ModalContext';
import { formatDate } from '../utilsFuctions';

const UserCard = ({ user }: { user: IUser }) => {
    const { registered, name, gender, location, email, id } = user;
    const { openModal } = useContext(ModalContext);

    return (
        <>
            <tr
                key={id.value + email}
                onClick={() => openModal(user)}
                className="group relative h-20 cursor-pointer overflow-hidden rounded-lg bg-stone-50 shadow-card transition-shadow duration-300 hover:shadow-none hover:outline hover:outline-2 hover:outline-cyan-400"
            >
                <td align="left" className="pl-5">
                    {formatDate(registered.date)}
                </td>
                <td
                    align="left"
                    className="text-gray-800 group-hover:text-cyan-400"
                >
                    {`${name.first} ${name.last}`}
                </td>
                <td align="left">{gender}</td>
                <td align="left" className="text-gray-800">
                    {location.country}
                </td>
                <td align="right" className="pr-5">
                    {email}
                </td>
            </tr>
        </>
    );
};

export default UserCard;
