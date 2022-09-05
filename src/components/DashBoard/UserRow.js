import React from 'react';
import useDBUser from '../hooks/dbUser';
import userImg from '../../images/profile-picture-default-png.png';

const UserRow = ({user, index}) => {
    const [dbUser] = useDBUser(user)
    const {email, photo} = user;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td><img src={dbUser.photo || userImg} className='w-16' alt=""/></td>
        <td><button className='btn btn-xs'>Make Admin</button></td>
        <td>Blue</td>
      </tr>
    );
};

export default UserRow;