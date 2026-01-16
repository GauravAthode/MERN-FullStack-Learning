import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--color-background) px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-(--color-primary) text-center">
          Create Account
        </h2>
        <p className="text-center text-(--color-text)/70 mt-2 mb-8">
          Sign up to start ordering delicious food
        </p>

        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="space-y-4"
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-4 py-3 rounded-lg border
                border-(--color-primary)/20
                focus:border-(--color-secondary)
                focus:ring-2 focus:ring-(--color-secondary)/30
                outline-none transition disabled:bg-gray-100"
            />
            {validationError.fullName && (
              <span className="text-xs text-red-500">
                {validationError.fullName}
              </span>
            )}
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            required
            className="w-full px-4 py-3 rounded-lg border
              border-(--color-primary)/20
              focus:border-(--color-secondary)
              focus:ring-2 focus:ring-(--color-secondary)/30
              outline-none transition disabled:bg-gray-100"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            maxLength="10"
            value={formData.mobileNumber}
            onChange={handleChange}
            disabled={isLoading}
            required
            className="w-full px-4 py-3 rounded-lg border
              border-(--color-primary)/20
              focus:border-(--color-secondary)
              focus:ring-2 focus:ring-(--color-secondary)/30
              outline-none transition disabled:bg-gray-100"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            required
            className="w-full px-4 py-3 rounded-lg border
              border-(--color-primary)/20
              focus:border-(--color-secondary)
              focus:ring-2 focus:ring-(--color-secondary)/30
              outline-none transition disabled:bg-gray-100"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
            required
            className="w-full px-4 py-3 rounded-lg border
              border-(--color-primary)/20
              focus:border-(--color-secondary)
              focus:ring-2 focus:ring-(--color-secondary)/30
              outline-none transition disabled:bg-gray-100"
          />

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="reset"
              disabled={isLoading}
              className="flex-1 py-3 rounded-lg font-semibold
                bg-(--color-primary)/10
                text-(--color-primary)
                hover:bg-(--color-primary)/20
                transition disabled:cursor-not-allowed"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 rounded-lg font-bold text-white
                bg-(--color-secondary)
                hover:bg-(--color-secondary-hover)
                shadow-lg transition transform hover:scale-105
                disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-(--color-text)/60 mt-6">
          🔒 Your data is safe · No spam guaranteed
        </p>
      </div>
    </div>
  );
};

export default Register;
