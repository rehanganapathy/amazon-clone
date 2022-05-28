import React, {useState} from "react";
import './Login.css';
import {Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
       // firebase
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            console.log(auth)

            if (auth) {
             history.push("/");
            }
          })
          .catch((err) => alert(err.message));
      
        }

        const register = (e) => {
            e.preventDefault();
            auth
              .createUserWithEmailAndPassword(email, password)
              .then((auth) => {
                  console.log(auth)
                if (auth) {
                  history.push("/");
                }
              })
              .catch((err) => alert(err.message));
            // fancy firebase register
          };

    return(
        <div className="Login">
        <Link to='/'>
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
          alt=""
        />
        </Link>
        <div className="login__container">
            <h1>Sign-In</h1>
            <form>
                <h5>Email</h5>
                <input type= 'text' value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type= 'password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign In
          </button>
        
        <p>
            By signing in you agree the Terms and Conditions of the Amazon 
            clone. Please see our privacy notice and out cookies policy
          </p>
        
        <button
        className="login__registerButton"
        onClick={register}>
        Create your amazon account</button>
        </div>
        </div>
    )
}

export default Login;