import "./index.css";
import {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/login")
                //console.log(userCredential)
            })
            .catch((error) => {
                //console.log(error)
            });
    }

    return (
        <div className="container-signin">
            <section className="wrapper">
                <div className="heading">
                    <h1>Register</h1>
                    <p>Already a user? <span><a href="/Login">Login</a> </span></p>
                </div>
                <form onSubmit={register}>
                    <div className="input-control">
                        <input type="email" placeholder="Enter your email" value={email}
                               onChange={(e) => setEmail(e.target.value)} className="input-field"></input>
                    </div>
                    <div className="input-control">
                        <input type="password" placeholder="Enter your password" value={password}
                               onChange={(e) => setPassword(e.target.value)} className="input-field"></input>
                    </div>
                    <button type="submit" name="submit" className="input-submit" value="Sign in">Submit</button>
                </form>
            </section>
        </div>
    )
}