import React from "react";
import useBikeParts from "../../hooks/useBikeParts";

const ManageProduct = () => {
  const [bikeParts, setbikeParts] = useBikeParts();


  

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure about that?");
    if (proceed) {
      const url = `http://localhost:5000/bikeParts/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingItem = bikeParts.filter(
            (bikePart) => bikePart._id !== id
          );
          setbikeParts(remainingItem);
          
        });
    }
  };
  return (

    <>

                        <div class="overflow-x-auto">
                        <table class="table w-full">
                        
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Img</th>
                                <th>Price</th>
                                
                                <th>Minimum Order</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                           {
                            bikeParts.map((bikePart,index) =>  <tr>
                                <th>{index + 1}</th>
                                <td>{bikePart.partName}</td>
                                <td><img className="w-28 rounded-full" src={bikePart.img} alt=""/> </td>
                                <td>{bikePart.price}</td>
                                <td>{bikePart.minOrder}</td>
                                <td>{bikePart.available}</td>
                                
                                <td><button  onClick={() => handleDelete(bikePart._id)} className="btn btn-outline btn-xs">Delete</button></td>
                            </tr>)
                           }
                            
                            </tbody>
                        </table>
                        </div>






    </>
  );
};

export default ManageProduct;
