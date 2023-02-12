import * as React from 'react';
import { useForm } from 'react-hook-form';
import "./signIn.scss"

export interface ISignInProps {
  popSignIn: boolean;
  setPopSignIn: any;
  setPopSignUp: any;
}
export function SignIn (props: ISignInProps) {
  const { popSignIn, setPopSignIn, setPopSignUp } = props;

//משיכת מידע
const { register, handleSubmit } = useForm();
const onSubmit = handleSubmit(data => {
  console.log(data)
})

  return (
<div>
      {popSignIn && (<div className='sign-in-container' onClick={() => setPopSignIn(false)}><div>
        
        
        <div onClick={(event) => event.stopPropagation()} className="sign-in-main">
        <button onClick={() => setPopSignIn(false)} ><img className='sign-in-main_close-icon' src="../src/assets/icons/close.svg" /></button>
        <form onSubmit={onSubmit} className="sign-in-main_form">
        
        <div className="sign-in-container_header">Sign in</div>
          <hr className='sign-in-container_header_hr'/>
          
          <div>
            <label className="sign-in-main_form_label">Email</label><br></br>
            <input
            {...register("email")} type="text" className="sign-in-main_form_label_input" />
          </div>

          <div>
            <label className="sign-in-main_form_label">Password</label><br></br>
            <input {...register("password")} type="password" className="sign-in-main_form_label_input" />
          </div>

          <div>
          <label className="sign-in-main_form_label">Source</label>
            <select {...register("source")} className="sign-in-main_form_label_select">
              <option value="Youtube">Youtube</option>
              <option value="Spotify">Spotify</option>
            </select>
          </div>
          
          <br></br>
          <div className="sign-in-main_bottom">
            <div className="sign-in-main_bottom_checkbox">
              <input {...register("Remember me")} type="checkbox" className="sign-in-main_bottom_checkbox_input" />
              <label htmlFor="" className="sign-in-main_bottom_checkbox_label">Remember me</label>
            </div>
          </div>

          <div>
            <br></br>
            <button type="submit" className="sign-in-main_bottom_submit">Sign In</button>
            <br></br>
          </div>

          <div className='sign-in-main_bottom_unregistered'>
          <br></br>
            <p>Forget your password? press <a href='#' className='sign-in-main_bottom_password_link'>here</a></p>
            <p>Unregistered ? <a onClick={() => {setPopSignIn(false); setPopSignUp(true)}} href='#' className='sign-in-main_bottom_unregistered_link'>Sign Up</a></p>
          </div>
          
        </form>
      </div>
    </div>
  </div>)}
</div>
  );
}