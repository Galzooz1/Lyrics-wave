import * as React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.scss"

export interface ILoginProps {
  popLogIn: boolean;
  setPopLogIn: any;
  setPopSignUp: any;
}

export function Login (props: ILoginProps) {
  const { popLogIn, setPopLogIn, setPopSignUp } = props;

//משיכת מידע
const { register, handleSubmit } = useForm();
const onSubmit = handleSubmit(data => {
  console.log(data)
})

  return (
    <div>
{popLogIn && (<div className='login-container' onClick={() => setPopLogIn(true)}><div>
      <div className="login-container_header">Login</div>
      <div onClick={(event) => event.stopPropagation()} className="login-main">
      <form onSubmit={onSubmit} className="login-main_form">
        <div>
          <label className="login-main_form_label">Email</label><br></br>
          <input
          //  ref={{...register("email")}} 
           name="email" type="text" className="login-main_form_label_input" />
        </div>
        <div>
          <label className="login-main_form_label">Password</label><br></br>
          <input type="password" className="login-main_form_label_input" />
        </div>
        <div>
          <label className="login-main_form_label">Source</label><br></br>
          <select className="login-main_form_label_select">
            <option value="Youtube">Youtube</option>
            <option value="Spotify">Spotify</option>
          </select>
        </div><br></br>
        <div className="login-main_bottom">
          <div className="login-main_bottom_checkbox">
            <input type="checkbox" className="login-main_bottom_checkbox_input" />
            <label htmlFor="" className="login-main_bottom_checkbox_label">Remember me</label>
          </div>
        </div>
        <div><br></br>
          <button type="submit" className="login-main_bottom_submit">Login</button>
        </div><br></br>
        <div className='login-main_bottom_unregistered'>
          <p>Forget your password? press <a href='#' className='login-main_bottom_password_link'>here</a></p>
          <p>Unregistered ? press <a onClick={() => {setPopLogIn(false); setPopSignUp(true)}} href='#' className='login-main_bottom_unregistered_link'>here</a></p>
        </div>
      </form>
    </div>
  </div>
</div>)}
</div>
  );
}

