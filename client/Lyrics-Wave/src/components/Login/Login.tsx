import * as React from 'react';
import { useForm } from 'react-hook-form';
import "./login.css"

export interface ILoginProps {
}

const onSubmit = () => {
    console.log("just for test - work")
}

export function Login (props: ILoginProps) {
  return (
    <div className='login-main'>
        <div>
            <h1 className='login-main_headline'>Login</h1>
        </div>
        <div>
            <form className='login-main_form' onSubmit={onSubmit}>
                <div>
                    <label className='login-main_form_email'>Email</label><br></br>
                    <input className="login-main_form_input"/>
                {/* ref={{...register("email")}} */}
                </div>
                <div>
                <label className='login-main_form_password'>Password</label><br></br>
                <input className='login-main_form_input'/>
              </div>
              <div>
                <label className='login-main_form_source'>Source</label><br></br>
                <select className='login-main_form_input'>
                  <option value="Youtube">Youtube</option>
                  <option value="Spotify">Spotify</option>
                </select>
              </div>
              <div>
                <div className='login-main_form_checkbox-div'>
                  <input className='login-main_form_input_checkbox' type="checkbox"/>
                  <label className='login-main_form_remember-me'>Remember me</label>
                </div>
                <div className='login-main_form_submit-div'>
                  <button className='login-main_form_submit-btn' type="submit">Submit</button>
                </div>
              </div>
            </form>
        </div>
        
    </div>
  );
}

