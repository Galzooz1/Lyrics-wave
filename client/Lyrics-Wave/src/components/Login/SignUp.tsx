import React from "react";
import { useForm } from "react-hook-form";
import "./signUp.scss";

interface SignUpProps {
  popSignUp: boolean;
  setPopSignUp: any;
  setPopSignIn: any;
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const { popSignUp, setPopSignUp, setPopSignIn } = props;
  //משיכת מידע
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      {popSignUp && (
        <div className="signUp-container" onClick={() => setPopSignUp(false)}>
          <div>
            <div
              onClick={(event) => event.stopPropagation()}
              className="signUp-main"
            >
              <button onClick={() => setPopSignUp(false)}>
                <img
                  className="sign-in-main_close-icon"
                  src="../src/assets/icons/close.svg"
                />
              </button>
              <form onSubmit={onSubmit} className="signUp-main_form">
                <div className="signUp-container_header">Sign Up</div>
                <hr className="signUp-container_header_hr" />

                <div>
                  <label className="signUp-main_form_label">Nickname</label>
                  <input
                    {...register("nickname")}
                    className="signUp-main_form_label_input"
                    type="text"
                  />
                </div>

                <div>
                  <label className="signUp-main_form_label">Email</label>
                  <input
                    {...register("email")}
                    type="text"
                    className="signUp-main_form_label_input"
                  />
                </div>

                <div>
                  <label className="signUp-main_form_label">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="signUp-main_form_label_input"
                  />
                </div>

                <div>
                  <label className="signUp-main_form_label">Source</label>
                  <select
                    {...register("source")}
                    className="signUp-main_form_label_select"
                  >
                    <option value="Youtube">Youtube</option>
                    <option value="Spotify">Spotify</option>
                  </select>
                </div>

                <br></br>
                <div className="signUp-main_bottom">
                  <div className="signUp-main_bottom_checkbox">
                    <input
                      {...register("remember-me")}
                      type="checkbox"
                      className="signUp-main_bottom_checkbox_input"
                    />
                    <label className="signUp-main_bottom_checkbox_label">
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <br></br>
                  <button type="submit" className="signUp-main_bottom_submit">
                    Sign Up
                  </button>
                  <br></br>
                </div>

                <div className="signUp-main_bottom_sign-in">
                  <br></br>
                  <p>
                    Already a member?{" "}
                    <a
                      onClick={() => {
                        setPopSignUp(false);
                        setPopSignIn(true);
                      }}
                      href="#"
                      className="signUp-main_bottom_sign-in_link"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
