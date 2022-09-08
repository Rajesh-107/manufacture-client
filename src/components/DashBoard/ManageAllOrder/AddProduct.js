import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = (e) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = ( data) => {
      const url = `http://localhost:5000/inventory`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          e.target.reset()
        });
    };
    
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Items!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl   bg-base-100">
    <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center mt-8 text-center">
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="Item Name"
                {...register("partName", )}
              />
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                {...register("description", )}
              />
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="Price"
                type="number"
                {...register("price", )}
              />
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="minOrder"
                type="minOrder"
                {...register("minOrder", )}
              />
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="available"
                type="available"
                {...register("available", )}
              />
              <input
                className="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="Photo URL"
                type="text"
                {...register("img", )}
              />
             
              <input
                className="mt-4 btn btn-outline"
                type="submit"
                value="Stock Item"
              />
            </form>
          </div>
        </div>

    </div>
  </div>
</div>
            
       
  
       
     
        
    );
};

export default AddProduct;