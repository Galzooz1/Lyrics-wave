import * as React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css"

export interface ILoginProps {
}

export function Login (props: ILoginProps) {

const { register, handleSubmit } = useForm();

const onSubmit = handleSubmit(data => {
  console.log(data)
})

const closeLogin = () => {
  document.querySelector(".login-container")?.classList.add("login-container_hide")
  document.querySelector(".login-container")?.classList.remove("login-container_non-hide")
}

const closeLoginOpenSignUp = () => {
  document.querySelector(".login-container")?.classList.add("login-container_hide")
  document.querySelector(".login-container")?.classList.remove("login-container_non-hide")
  document.querySelector(".signUp-container")?.classList.remove("signUp-container_hide")
  document.querySelector(".signUp-container")?.classList.add("signUp-container_non-hide")
}

  return (
    <div onClick={closeLogin} className='login-container login-container_hide'>
          <div onClick={(event) => event.stopPropagation()} className="login-main max-w-md w-full mx-auto">
      <div className="login-container_header_small text-center font-medium text-xl">somothing</div>
      <div className="login-container_header text-3xl font-bold text-gray-900 mt-2 text-center">Login</div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
          <input
          //  ref={{...register("email")}} 
           name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
          <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">Source</label>
          <select name="" id="" className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="Youtube">Youtube</option>
            <option value="Spotify">Spotify</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
            <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
        </div>
        <div className='login-container_unregistered'>
          <p>Unregistered ? press <a href='#' className='login-container_unregistered_link' onClick={closeLoginOpenSignUp}>here</a> </p>
        </div>
      </form>
    </div>
  </div>
    </div>

  );
}

