import React, { useState,useContext } from "react";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {

  const [rememberMe, setRememberMe] = useState(false);
  const {login} = useContext(AuthContext)
  const year = new Date().getFullYear()
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  


  const onSubmit = async (data) =>{
   const {email,password} = data
   console.log(email,password)
   const response = await login(email,password)
   if(response?.token){
     navigate('/')
   }
   else{
    alert('invalid login')
   }
  }

  

  return (
    <>
           <div className="absolute inset-0 flex items-center justify-center p-4 bg-[url('/bg1.jpeg')] bg-cover bg-center  realtive overflow-hidden">
      {/* maincontainer */}

      <div className="w-full max-w-6xl bg-black/20 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md border border-white/10">
        <div className="flex min-h-[600px]">
          {/* leftside:-image or background yet to be decided */}
          <div className="flex-1 bg-black/40 flex items-center justify-center p-12 relative backdrop-blur-sm gap-5">
            <div className=" flex items-center flex-col gap-4">
              {/* <h1 className="uppercase text-6xl font-extrabold tracking-widest bg-[#00d4f5] bg-clip-text text-transparent">
           VAAU
         </h1> */}
              <h1 className="uppercase tracking-widest font-extrabold text-6xl bg-gradient-to-r from-[#0f98b5] via-[#58c7da] to-[#a7e3f4] bg-clip-text text-transparent">
                traffic eye
              </h1>
            </div>
          </div>

          {/* rightside:- the mainform container */}
          <div className="flex-1 bg-black/40 flex items-center justify-center p-12 backdrop-blur-sm">
            <div className="w-full max-w-md">
              {/* Login Card */}
              <div className="bg-gray-900/20 rounded-2xl p-8 shadow-xl border border-gray-700 backdrop-blur-lg">
                {/* Header */}
                <div className="text-center flex flex-col items-center gap-2 mb-8">
                  {/* <img
                    src=""
                    alt="Logo"
                    className="h-[70px] object-contain rounded-md border-2 border-border text-white"
                  /> */}
                 
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Username *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="Enter your username"
                      {...register("email",{required:true,})}
                      
                    />
                    {errors.username && <p className="text-secondary mt-2">Please Enter Username</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="Enter your password"
                      {...register("password",{required:true,maxLength:10})}
                    />
                    {errors.password && errors.maxLength && <p className="text-secondary mt-2">Please Enter Password</p>}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-purple-500 bg-gray-800/70 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-300">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm text-Primary hover:text-secondary font-semibold transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0f98b5] to-[#a7e3f4] hover:from-[#0d89a3] hover:to-[#93d8ec] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-3 w-full flex justify-center">
      <h2><p className='text-secondary text-xl'>© {year} VAAU Technosoft</p></h2>
      </div>
    </div>

    
    </>

  );
};

export default LoginForm;


// relative min-h-[480px] w-full rounded-lg overflow-hidden flex flex-col items-start justify-end p-8 sm:p-12 bg-[url('')] bg-cover bg-center"