import React from "react";
import { useForm } from "react-hook-form";

const MyReview = (e) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      const url = `http://localhost:5000/review`;
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
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
              <input
                class="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="Name"
                {...register("Name", )}
              />
              <textarea
                class="input input-bordered textarea input-primary w-full mt-8 max-w-xs"
                {...register("description", )}
              />
              <input
                class="input input-bordered input-primary w-full mt-8 max-w-xs"
                placeholder="rating"
                type="number"
                {...register("rating", )}
              />
              <input
                className="mt-4 btn btn-outline"
                type="submit"
                value="Post"
              />
            </form>
      </div>
      
    </div>
  );
};

export default MyReview;
