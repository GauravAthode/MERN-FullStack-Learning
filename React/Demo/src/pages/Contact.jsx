import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    handleClearForm();
  };
  return (
    <>
      <div className="text-center ">
        <h1> Contact Us</h1>
        <div className=" container">
          <form onReset={handleClearForm} onSubmit={handleSubmit} className="">
            <div className="mt-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter your name"
                className="text-primary"
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="text-primary"
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter your message"
                className="text-primary"
                required
              ></textarea>
            </div>
            <div className="d-flex gap-3 justify-content-center mt-2">
              <button className="btn bg-danger" type="reset">
                Clear Form
              </button>
              <button className="btn bg-primary" type="submit">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
