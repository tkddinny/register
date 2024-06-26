import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function fetchData() {
    try {
      const responce = await axios.get(`http://localhost:3000/user/create`);
      // console.log(responce);
    } catch (error) {
      console.log(`register err: ${error}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resPost = await axios.post(`http://localhost:3000/user/create`, {
        name,
        email,
        password,
      });
      console.log(resPost);
      alert(`form sumbited`);
      setName("");
      setEmail("");
      setPassword("");
      fetchData()
      navigate('/login')
    } catch (error) {
      console.log(`register axios post err ${error}`);
    }
  };

  return (
    <>
      <div className="bg-red-400 w-full h-[40rem] flex items-center justify-center ">
        <div className="w-[600px] h-auto bg-red-500  py-6 px-10 rounded-xl text-white">
          <h1 className="py-3 capitalize text-3xl">register form</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="text-left">
                <label className="capitalize pb-2 text-2xl block">name</label>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="capitalize pb-2 text-2xl block">email</label>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
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
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="py-2 px-5 capitalize mt-3 border border-white rounded-lg text-white"
                >
                  register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
