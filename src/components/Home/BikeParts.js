import React, { useEffect, useState } from 'react';
import Bikepart from './Bikepart';

const BikeParts = () => {
    const [parts, setParts] = useState([]);
    const [partDetail, setpartDetail] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:5000/bikeparts")
        .then((res) => res.json())
        .then((data) => setParts(data));
    }, []);
    return (

        <div id='bikeparts'>

<section id="carpart" className="text-gray-600 body-font">
      <div className="py-24 container m-auto lg:w-10/12 w-full">
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-gray-900">
          All Bikepart Item availabe
        </h1>
        <div className="flex flex-wrap w-full py-14 mb-20 px-4">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Service
            </h1>

            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap">
        {parts.map((part) => (
            <Bikepart
              key={part._id}
              part={part}
              setpartDetail={setpartDetail}></Bikepart>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default BikeParts;