import React from 'react';


function Signup() {
  return (
    <div className="min-h-screen p-5 ">
      <h1 className="mb-5 text-4xl">Profile Setup</h1>

      <div className="w-full p-10 mx-auto bg-white rounded-md shadow-lg md:w-1/2">
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Bio
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="Enter your bio"
            ></textarea>
          </div>

          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Profile Picture
            </label>
            <input type="file" />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
