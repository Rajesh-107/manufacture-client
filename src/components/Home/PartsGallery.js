import React from "react";

const PartsGallery = () => {
  return (
    <div>
      <section className="overflow-hidden text-gray-700 py-10">
        <h1 className="font-bold text-2xl text-center">
          Our InComing Products
        </h1>
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                  src="https://automacha.com/wp-content/uploads/2020/05/nissan-car-factory.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full  hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                  src="https://new-media.dhakatribune.com/en/uploads/2022/03/20/istockphoto-1066926898-612x612.jpeg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center  hover:scale-110 transition duration-300 ease-in-out w-full h-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/002_Production_line_-_car_assembly_line_in_General_Motors_Manufacturing_Poland_-_Gliwice%2C_Poland.jpg/1200px-002_Production_line_-_car_assembly_line_in_General_Motors_Manufacturing_Poland_-_Gliwice%2C_Poland.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover  hover:scale-110 transition duration-300 ease-in-out object-center w-full h-full rounded-lg"
                  src="https://ljworkwear.co.uk/wp-content/uploads/2022/01/20210811_162011-scaled.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover  hover:scale-110 transition duration-300 ease-in-out object-center w-full h-full rounded-lg"
                  src="https://s.wsj.net/public/resources/images/P1-BM758_TRADE_G_20130818190649.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover  hover:scale-110 transition duration-300 ease-in-out object-center w-full h-full rounded-lg"
                  src="https://www.insidermedia.com/uploads/news/images/superbike-factory-resized.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartsGallery;
