import React from "react";

const RegistrationForm = () => {
  return (
    <>
      <div className=" bg-gray-100 p-6">
        <form className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Coaching Institute Registration Form
          </h1>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">
              Personal Information
            </h2>
            <div>
              <label className="block font-medium mb-1">
                Full Name: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Email Address: <sup className="text-red-600">*</sup>
              </label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Mobile Number: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Date of Birth: <sup className="text-red-600">*</sup>
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">
              Academic Details
            </h2>
            <div>
              <label className="block font-medium mb-1">
                Last Completed Qualification:{" "}
                <sup className="text-red-600">*</sup>
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>-- Select --</option>
                <option>10th</option>
                <option>12th</option>
                <option>Graduate</option>
                <option>Postgraduate</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Percentage / Grade: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">
              Course Information
            </h2>
            <div>
              <label className="block font-medium mb-1">
                Preferred Course: <sup className="text-red-600">*</sup>
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>-- Select --</option>
                <option>IIT-JEE</option>
                <option>NEET</option>
                <option>Banking Exams</option>
                <option>UPSC</option>
              </select>
            </div>

            <div>
              <label className="font-medium">
                Batch Timing Preference <span className="text-red-600">*</span>
              </label>

              <div className="flex gap-4 mt-2">
                <label>
                  <input type="radio" name="batch" /> Morning
                </label>
                <label>
                  <input type="radio" name="batch" /> Afternoon
                </label>
                <label>
                  <input type="radio" name="batch" /> Evening
                </label>
                <label>
                  <input type="radio" name="batch" /> Weekend
                </label>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">Address</h2>
            <div>
              <label className="block font-medium mb-1">
                Residential Address: <sup className="text-red-600">*</sup>
              </label>
              <textarea
                rows="3"
                className="w-full border rounded px-3 py-2"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">
                City: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Pin Code: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">
              Guardian Details
            </h2>
            <div>
              <label className="block font-medium mb-1">
                Guardian’s Full Name: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Guardian’s Contact Number: <sup className="text-red-600">*</sup>
              </label>
              <input className="w-full border rounded px-3 py-2" required />
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">
              Additional Information
            </h2>
            <div>
              <label className="block font-medium mb-1">
                How did you hear about us?:{" "}
                <sup className="text-red-600">*</sup>
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>-- Select --</option>
                <option>Friends</option>
                <option>Online Ad</option>
                <option>Newspaper</option>
                <option>Social Media</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Special Requirements (Optional)
              </label>
              <textarea
                rows="3"
                className="w-full border rounded px-3 py-2"
              ></textarea>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="reset"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
