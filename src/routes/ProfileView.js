import React, { useState, useEffect } from 'react';
import { fetchProfile } from '../api';

const ProfileView = () => {

  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const someId = '64ed1fd48a416d7166bb5652';
      const response = await fetchProfile(someId);
      console.log('Fetched data from API:', response);
      setProfiles(response.data)
    };

    fetchData();
  }, []);


  if (!profiles) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-10 rounded-md shadow-lg w-full md:w-1/2 mx-auto">
      <h2 className="text-3xl mb-5">Your Profile</h2>

      {/* Name */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold mb-2">Name:</p>
        <p className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight">
          {profiles.name}
        </p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold mb-2">Email:</p>
        <p className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight">
          {profiles.email}
        </p>
      </div>

      {/* Bio */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold mb-2">Bio:</p>
        <p className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight">
          {profiles.bio || "No Bio Available"}
        </p>
      </div>

      {/* Profile Picture */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold mb-2">Profile Picture:</p>
        {console.log('Profile Picture:', profiles.profile_picture)}
        <img 
        src={`https://raw.githubusercontent.com/Oliver-Leonor/image-repo/main/horse.png`} 
        alt="Profile" 
        className="rounded-full h-32 w-32 object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileView;
