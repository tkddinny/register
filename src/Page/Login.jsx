import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lodiang, setLoding] = useState(false);
  const navigate = useNavigate();

  const tost = () =>{
    toast.success("login user")
  }

  const handleSubmit = async (e) => {
    setLoding(true);
    e.preventDefault();
    try {
      const responce = await axios.post(`http://localhost:3000/user/login`, {
        email,
        password,
      });
      console.log(responce)
      if ((email, password)) {
        setEmail("");
        setPassword("");
        navigate("/home");
        tost()
      }
      else {
        alert(`not match`)
      }
    } catch (error) {
      console.log(`fetch data err: login axios post err:`);
      setLoding(false);
    }
  };

  // console.log(lodiang);

  return (
    <>
      <div className="bg-red-400 w-full h-[40rem] flex items-center justify-center ">
        <div className="w-[600px] h-auto bg-red-500  py-6 px-10 rounded-xl text-white">
          <h1 className="py-3 capitalize text-3xl">login form</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="text-left">
                <label className="capitalize pb-2 text-2xl block">email</label>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="capitalize pb-2 text-2xl block">
                  password
                </label>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="py-2 px-5 capitalize mt-4 border border-white rounded-lg text-white"
                >
                  {lodiang ? "loading" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
