import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [modal, setModal] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user?.email}`,{
        method: 'GET',
        headers: {
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {

          console.log('res',res);

          if(res.status === 401 || res.status===403){
            navigate('/');
          }
          return res.json()
        })
        .then((data) => {
          setOrders(data)
        });
    }
  }, [user]);

 

  const handleCancelOrder = (id) => {
    const url = `http://localhost:5000/order/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((product) => product._id !== id);
          
          setOrders(remaining);
        }
      });
    }
    return (
        <div>
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Images
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Price
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Quantity
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Total Price 
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <tr key={order._id} class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index +1 }</td>
             
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <div class="avatar">
                  <div class="w-20 rounded-full">
                    <img src={order.img} alt='' />
                  </div>
                </div>
             
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
               {order.product}
             
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              {order.price}
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              {order.quantity}
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                {order.totalPrice}
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              {order.status ? <p className='text-green-500'>Shipped</p> : <p className='text-red-500'>Pending</p>}
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              <button onClick={() =>handleCancelOrder(order._id)} class="btn btn-xs">Delete</button>
              </td>
              <td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              <button class="btn btn-xs">Pay Now</button>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyOrders;
