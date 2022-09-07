import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostperPage] = useState(8);


   


   useEffect(() => {
        if (admin) {
          const url = "http://localhost:5000/allorder";
          fetch(url, {
            method: "Get",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
        }
      }, [admin]);

      const handleShipment = (id) => {

        fetch(`http://localhost:5000/ordershipment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ shipment: 'paid' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);  
            })
    }
  
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure about that?");
        if (proceed) {
          const url = `http://localhost:5000/allorder/${id}`;
    
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remainingItem = orders.filter(
                (order) => order._id !== id
              );
              setOrders(remainingItem);
            });
        }
      };

 

    const lastPost = currentPage * postperpage;
    const firstPost = lastPost - postperpage;
    const currentpost = orders.slice(firstPost, lastPost)

    return (
        <div className='ma'>
            <h2>This is all order: {orders.length}</h2>
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
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Product Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Images
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Price
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Quantity
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                TotalPrice
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Address
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
           
         {
            orders.map((order,index) =>  <tr class="border-b">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {order.email}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             {order.product}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <img src={order.img} className='w-20' alt=""/>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {order.price}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {order.quantity}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {order.totalPrice}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {order.address}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {order.paid
                    ?
                    <div>
                        {
                            order.status === 'paid' ?
                                <p className='font-bold'>Shipped</p>
                                :
                                <button onClick={() => handleShipment(order._id)} class="btn bg-green-600 btn-xs">Make Shipment</button>
                        }
                    </div>
                    :
                    <button onClick={() => handleDelete(order._id)}  class="btn btn-error btn-xs ml-3">Delete Order</button>
                }

                { }
            </td>
           
          </tr>
          )}
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default ManageAllOrder;