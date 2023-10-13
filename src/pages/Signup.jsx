import React, { useState } from "react";
import Input from "../Components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password requirements
    const requirements = {
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      number: /\d/.test(newPassword),
      specialChar: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(newPassword),
    };

    setPasswordRequirements(requirements);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all password requirements are met
    const allRequirementsMet = Object.values(passwordRequirements).every(
      (requirement) => requirement
    );

    if (!allRequirementsMet) {
      setMessage("Password requirements not met.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://crm-ai.onrender.com/api/v1/users/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
       
        setMessage("Registration successful!");
        
        navigate('/SignIn')
      } else {
        
        setMessage(response.data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred while registering.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:flex">
      <img
        src="/images/signup.png"
        alt="icon"
        className="hidden sm:block sm:bg-[#F4F4F4] sm:w-1/2"
      />
      <div className="my-[50px] sm:w-1/2">
        <div className="mx-8  flex flex-col items-center">
          <h1 className="text-[28px]text-[#1E1E1E]  font-semibold">
            Sign Up to Event<span className="text-[#669083] pb-1">Buddy</span>
          </h1>
          <p className="text-[20px]text-[#1E1E1E] pb-12">
            Please fill this form to create an account
          </p>
        </div>
        <form action="" className="m-8" onSubmit={handleSubmit}>
          <div className="flex border items-center border-[#7E7E7E] justify-center gap-2 rounded-xl mx-[48px] p-2 mb-[34px]">
            <button className="">Continue with Google</button>
            <img src="/images/google.png" alt="icon" />
          </div>

          <h2 className="text-center mb-8">OR</h2>

          <label htmlFor="Name" className="block">
            Name
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="Email" className="block">
            Email Address
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password" className="block">
            Password
          </label>
          <div className="border flex items-center justify-between pr-2 border-[#7E7E7E] rounded w-full mb-[24px]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="outline-none px-2"
              onChange={handlePasswordChange}
              required
            />
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} />
            )}
          </div>

          <label>Password Requirements:</label>
          <ul>
            <li>
              {passwordRequirements.length ? "✓" : ""} At least 8 characters
            </li>
            <li>
              {passwordRequirements.uppercase ? "✓" : ""} At least one uppercase letter
            </li>
            <li>
              {passwordRequirements.lowercase ? "✓" : ""} At least one lowercase letter
            </li>
            <li>
              {passwordRequirements.number ? "✓" : ""} At least one number
            </li>
            <li>
              {passwordRequirements.specialChar ? "✓" : ""} At least one special character
            </li>
          </ul>

          <button
            className="bg-[#1E1E1E] text-white py-[6px] px-[24px] rounded-lg block mx-auto my-[44px]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <p className="text-[#5D5D5D] text-center">
            Already have an account?{" "}
            <a href="/SignIn" className="text-[#696D73]">
              Sign in
            </a>
          </p>
          <p className="text-[#5D5D5D] text-center">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
