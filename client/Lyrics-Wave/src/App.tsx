import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-medium text-xl">somothing</div>
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">another text</div>

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
            </form>
          </div>
        </div>
    </div>
  )
}

export default App
