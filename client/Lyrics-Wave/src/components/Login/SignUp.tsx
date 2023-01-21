import * as React from 'react';
import "./SignUp.css"

export interface ISignUpProps {
}

const closeSignUp = () => {
    document.querySelector(".signUp-container")?.classList.add("signUp-container_hide")
    document.querySelector(".signUp-container")?.classList.remove("signUp-container_non-hide")
}

export function SignUp (props: ISignUpProps) {
  return (
    <div onClick={closeSignUp} className='signUp-container signUp-container_hide'>
          <div onClick={(event) => event.stopPropagation()} className="signUp-main max-w-md w-full mx-auto">
      <div className="signUp-container_header_small text-center font-medium text-xl">somothing</div>
      <div className="signUp-container_header text-3xl font-bold text-gray-900 mt-2 text-center">signUp</div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
      <form className="space-y-6">
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
      </form>
    </div>
  </div>
    </div>
  );
}
