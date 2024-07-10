import React, { useState } from "react";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="font-satoshi">
      <div className="flex flex-col sm:flex-row w-full min-h-screen">
        <div className="w-full sm:w-1/2 flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt="Educational Background"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-around p-8 sm:p-20 bg-white">
          <div className="w-full max-w-md mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Sign Up</h3>
            <p className="text-base mb-2">Join us and start learning today!</p>

            <form className="w-full flex flex-col" onSubmit={handleSignup}>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-48 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-60 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="flex items-center justify-between my-4">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="w-4 h-4 mr-2" />I agree to
                  the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#060606] rounded-md p-4 mt-6"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="w-full flex items-center justify-center mt-4">
            <p className="text-sm font-normal text-[#060606]">
              Already have an account?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
