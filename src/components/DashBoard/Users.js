import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";
import userRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch,} = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  


  return (
    <div>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>Name</th>
              <th>Img</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
  
    </div>
  );
};

export default Users;
