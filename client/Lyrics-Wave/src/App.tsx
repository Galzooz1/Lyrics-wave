import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Header } from './components/HomePage/Header';
import { BestSongs } from './components/HomePage/BestSongs';
import { About } from './components/HomePage/About';
import { Login } from './components/Login/Login';
import { SignUp } from './components/Login/SignUp';
import { Footer } from './components/HomePage/Footer';


function App() {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = handleSubmit(data => {
  //   console.log(data)
  // })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <Header />
      <Login />
      <SignUp />
      <About />
      <BestSongs />
      <Footer />
    </div>
  )
}

export default App


