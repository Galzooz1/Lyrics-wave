import * as React from 'react';
import { useForm } from 'react-hook-form';
import "./SignUp.scss"

export interface ISignUpProps {
  signUp: boolean;
  closeSignUp: () => void;
  openLogin: () => void;
}

export function SignUp (props: ISignUpProps) {

//משיכת מידע
const { register, handleSubmit } = useForm();
const onSubmit = handleSubmit(data => {
  console.log(data)
})


  return (
<div>
{props.signUp && <div className='signUp-container' onClick={props.closeSignUp}>
  <div>
    <div className="signUp-container_header">SignUp</div>
      <div onClick={(event) => event.stopPropagation()} className="signUp-main">
        <form onSubmit={onSubmit} className="signUp-main_form">
          <div>
            <label className='signUp-main_form_label'>Nickname</label>
            <input className="signUp-main_form_label_input" type="text" />
          </div>
          <div>
            <label className="signUp-main_form_label">Email</label><br></br>
            <input
            //  ref={{...register("email")}} 
             name="email" type="text" className="signUp-main_form_label_input" />
          </div>
          <div>
            <label className="signUp-main_form_label">Password</label><br></br>
            <input type="password" className="signUp-main_form_label_input" />
          </div>
          <div>
            <label className="signUp-main_form_label">Source</label><br></br>
            <select className="signUp-main_form_label_select">
              <option value="Youtube">Youtube</option>
              <option value="Spotify">Spotify</option>
            </select>
          </div><br></br>
          <div className="signUp-main_bottom">
            <div className="signUp-main_bottom_checkbox">
              <input type="checkbox" className="signUp-main_bottom_checkbox_input" />
              <label className="signUp-main_bottom_checkbox_label">Remember me</label>
            </div>
          </div>
          <div><br></br>
            <button type="submit" className="signUp-main_bottom_submit">SignUp</button>
          </div><br></br>
          <div className='signUp-main_bottom_login'>
            <p>Already a member? <a onClick={() => {props.openLogin(); props.closeSignUp()}} href='#' className='signUp-main_bottom_login_link'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>}
</div>
  );
}
