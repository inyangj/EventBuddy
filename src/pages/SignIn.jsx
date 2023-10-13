import React, { useState, useEffect } from "react";
import Input from "../Components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { GeoLocationValidator } from "geolocation-validator";
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         
          const { latitude, longitude } = position.coords;
          const main = { latitude, 
            longitude };
            setCoordinates(main)
            console.log(coordinates)
          console.log(main);
          console.log(position.coords);
        },
        (error) => {
       
          setError(error.message);
          alert(error)
        }
      );
    } else {
      setError("Geolocation is not available in your browser.");
      alert(error)
    }
  }, []);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const geoLocator = new GeoLocationValidator();
    const validationPoint = {
      latitude: 4.8472325,
      longitude: 6.9746145,
    };

    const userCoordinates = coordinates;
    console.log(userCoordinates)

    setLoading(true);
    const validated = await geoLocator.validateLocation(userCoordinates, validationPoint, 0);

    console.log(validated.result)

    try {
      if (validated.result != false) {
        const response = await axios.post(
          "https://crm-ai.onrender.com/api/v1/users/login",
          {
            email,
            password,
          }
        );console.log(response)

        if (response.status === 200) {
          toast.success("Sign in successful!");
        
          navigate('/Dashboard')
        } else {
         
          toast.error(response.data.message || "Sign in failed.");
        }
      } else {
        setError(validated.message)
        alert(error)
        console.log(validated.message);
      }
    } catch (error) {
      toast.error("An error occurred while signing in.");
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
            Sign In to Event<span className="text-[#669083] pb-1">Buddy</span>
          </h1>
          <p className="text-[20px]text-[#1E1E1E] pb-12">
            Please fill this form to create an account
          </p>
        </div>
        <form action="" className="m-8" onSubmit={handleSignIn}>
          <div className="flex border items-center border-[#7E7E7E] justify-center gap-2 rounded-xl mx-[48px] p-2 mb-[34px]">
            <button className="">Continue with Google</button>
            <img src="/images/google.png" alt="icon" />
          </div>

          <h2 className="text-center mb-8">OR</h2>

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
          <div className="border flex items-center justify-between pr-2 border-[#7E7E7E] rounded w-full mb-[24px] ">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="outline-none px-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} />
            )}
          </div>
          <button
            className="bg-[#1E1E1E] text-white py-[6px] px-[24px] rounded-lg block mx-auto my-[44px]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-[#5D5D5D] text-center">
          Don't have an account?{" "}
          <a href="/" className="text-[#696D73]">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
