import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PartsDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [update, setUpdate] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [ user ] = useAuthState(auth)

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update, id]);
  
    const increaseQuantity = () => {
        if(inventory.availablequantity <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
       
    }
    const decreaseQuantity = () => {
        if(inventory.minquantity >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
       
    }

    const handlePlaceOrder = event =>{
      event.preventDefault();
      const order = {
          name: user.displayName,
          email: user.email,
          product: inventory.partName,
          img:inventory.img,
          price: inventory.price,
          productId: id,
          quantity: event.target.quantity.value,
          address: event.target.address.value,
          phone: event.target.phone.value,
      }
      fetch('http://localhost:5000/order',{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          // toast.success('your order placed successfully');
          event.target.reset();
          
      })
    }
  return (

    <div class="hero min-h-screen">
      <form onSubmit={handlePlaceOrder}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={inventory.img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
  
      <p class="py-6">{inventory.description}</p>
      <p className="text-red-500 font-bold">Price: {inventory.price}</p>
      <p className="text-lg">Quantity: {inventory.available}</p>
      <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Enter Quantity</span>
                </label>
                <label class="input-group">
                    <span onClick={decreaseQuantity}>+</span>
                    <input type="number" name='quantity' value={quantity} class="input input-bordered focus:outline-none" />
                    <span onClick={increaseQuantity}>-</span>
                </label>
                </div>
                <h1 class="text-5xl font-bold">{inventory.partName}</h1>
                <label className='form-control'>
                <input type="text"  className="input input-bordered  focus:outline-none mb-2  " value={user?.displayName}/>
                </label>
                <label className='form-control'>
                <input type="email"  className="input input-bordered  focus:outline-none mb-2  " value={user?.email}/>
                </label>
                <label className='form-control'>
                <input type="text" name='address' placeholder='Enter Address' className="input input-bordered  focus:outline-none mb-2  " />
                </label>
                <label className='form-control'>
                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered  focus:outline-none mb-2  " />
                </label>
                
                <button className='btn btn-secondary my-3'>Place order</button>

      
     
    </div>
  </div>
  </form>
  
                {/* <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Enter Quantity</span>
                </label>
                <label class="input-group">
                    <span onClick={decreaseQuantity}>+</span>
                    <input type="number" name='quantity' value={quantity} class="input input-bordered focus:outline-none" />
                    <span onClick={increaseQuantity}>-</span>
                </label>
                </div>
                <h1 class="text-5xl font-bold">{inventory.partName}</h1>
                <label className='form-control'>
                <input type="text"  className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" value={user?.displayName}/>
                </label>
                <label className='form-control'>
                <input type="email"  className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" value={user?.email}/>
                </label>
                <label className='form-control'>
                <input type="text" name='address' placeholder='Enter Address' className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" />
                </label>
                <label className='form-control'>
                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" />
                </label>
                
                <button className='btn btn-secondary my-3'>Place order</button>
                 */}
</div>






  );
};

export default PartsDetail;
