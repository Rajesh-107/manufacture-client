import React from 'react';
import useDBUser from '../hooks/dbUser';
import userImg from '../../images/profile-picture-default-png.png';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const [dbuser] = useDBUser()
    const {email, photo, role} = user;

    const makeadmin = () => {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method: 'PUT',
        headers: {
          authorization: `Beaere ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 403){
          window.alert('Failed to make admin')
      }
       return res.json()})
      .then(data => {
       if(data.modifiedCount > 0) {
        window.alert('Done')
        refetch();
       }
     
      
      })
    }


    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td><img src={dbuser.PhotoURL || userImg} className='w-16' alt=""/></td>
        <td>{role === 'admin' ?
        <p className='text-red-500 font-bold rounded-full'>Already Admin</p> :
        <button onClick={makeadmin} className='btn btn-xs'>Make Admin</button>}</td>
        {/* <td><button className='btn btn-xs'>Remove User</button></td> */}
      </tr>
    );
};

export default UserRow;