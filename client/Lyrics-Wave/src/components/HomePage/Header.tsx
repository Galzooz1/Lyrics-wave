import * as React from 'react';
import "./Header.scss"
import logoSmall from '../HomePage/logo-small.png'
import { Login } from '../Login/Login';
import { SignUp } from '../Login/SignUp';
import { useForm } from 'react-hook-form';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {



  // פתיחה וסגירה של ההתחברות
  const [popLogIn, setPopLogin] = React.useState<boolean>(false)
  const loginOpen = () => {
    setPopLogin(!popLogIn)
  }
  const closeLogin = () => {
    setPopLogin(false)
  }
  const openLogin = () => {
    setPopLogin(true)
  }

  // פתיחה וסגירה של ההרשמה 
  const [popSignUp, setPopSignUp] = React.useState<boolean>(false)
  const signUpOpen = () => {
    setPopSignUp(!popSignUp)
  }
  const closeSignUp = () => {
    setPopSignUp(false)
  }
  const openSignUp = () => {
    setPopSignUp(true)
  }

  return (

    <div>
      <Login 
      login = {popLogIn}
      closeLogin = {closeLogin}
      openSignUp = {openSignUp}
      />
      <SignUp
      signUp = {popSignUp}
      closeSignUp = {closeSignUp}
      openLogin = {openLogin}
      />


      <header className="header">
      <div className="header_left">
        <img className='header_left_logo_small' src={logoSmall} />
        <a onClick={signUpOpen} href="#" className="header_left_context link">
         Sign Up
        </a>
        <a onClick={loginOpen} href="#" className="header_left_context link">
          Login
        </a>
      </div>
      <div className="header_mid_context">
        <a href="#" className="link">About</a>
      </div>
      <div className="header_right_context">
        <a href="#">Post A Song</a>
      </div>
    </header>
    </div>
  );
}