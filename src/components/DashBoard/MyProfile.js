import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useDBUser from "../hooks/dbUser";
import randomProfile from "../../images/profile-picture-default-png.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [dbUser] = useDBUser(user);
  const userPhoto = user.photoURL || randomProfile;

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const education = event.target.education.value || dbUser.education;
    const address = event.target.address.value || dbUser.address;
    const contact = event.target.contact.value || dbUser.contact;
    const linkedin = event.target.linkedin.value || dbUser.linkedin;
    const photo = event.target.photo.value;
    // await updateProfile({ education, address, contact, linkedin });

    const updatedUser = {
      education,
      address,
      contact,
      linkedin,
      photo,
    };

    if (user.email) {
      fetch(`http://localhost:5000/user/${user.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Profile Updated");
          event.target.reset();
        });
    }
  };

  return (
    <div className="card md:w-3/4 mx-auto mt-5 md:flex-row h-fit ">
      <div>
        <figure className="px-10 pt-10">
          <img src={dbUser.photo || userPhoto} alt="" className="rounded-full w-44" />
        </figure>

        <div className="text-left ml-8 text-lg mt-8">
          <h3>
            {" "}
            <span className="font-bold text-indigo-500">Name:</span> {user.displayName}
          </h3>
          <h3>
            {" "}
            <span className="font-bold text-indigo-500">Email:</span> {user.email}
          </h3>
        </div>
      </div>
      <form className="w-full" onSubmit={handleProfileUpdate}>
        <div className="card-body my-0 gap-y-0 items-center text-center">
          <h2 className="card-title text-indigo-500 text-3xl mb-5 pb-2">Update Your Profile</h2>
          <div className="h-1 w-72 bg-indigo-500 rounded"></div>
      
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder={dbUser?.education || "Please Type education"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder={dbUser?.address || "Type address"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="text"
              name="contact"
              placeholder={dbUser?.contact || "Type contact number"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Linkedin Profile</span>
            </label>
            <input
              type="text"
              name="linkedin"
              placeholder={dbUser?.linkedin || "Type Linked profile "}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Profile Picture link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="card-actions mt-5">
            <button type="submit" className="btn btn-wide">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
