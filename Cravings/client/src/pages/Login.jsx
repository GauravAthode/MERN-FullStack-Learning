import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
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
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      handleClearForm();
      navigate("/user-dashboard");
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
          Welcome Back
        </h2>
        <p className="text-center text-(--color-text)/70 mt-2 mb-8">
          Login to continue ordering delicious food
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
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

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg font-bold text-white
              bg-(--color-secondary)
              hover:bg-(--color-secondary-hover)
              shadow-lg transition transform hover:scale-105
              disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-(--color-text)/60 mt-6">
          🔒 Secure login · Trusted by food lovers
        </p>
      </div>
    </div>
  );
};

export default Login;
