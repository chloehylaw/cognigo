import "./index.css";
import {useState} from "react";
import {auth, app} from "../firebase"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/")
                //console.log(userCredential)
            })
            .catch((error) => {
                //console.log(error)
            });
    }

    return (
        <div className="container-signin">
            <section className="wrapper">
                <div className="dashSection" style={{padding: "1.5em"}}>
                    <div className="heading" style={{textAlign: "center"}}>
                        <h1 style={{textAlign: "center", marginTop:"1em", marginBottom: "1em"}}><strong>Login</strong></h1>
                    </div>
                    <form onSubmit={login}>
                        <div className="input-control">
                            <input type="email" placeholder="Enter your email" value={email}
                                onChange={(e) => setEmail(e.target.value)} className="input-field"></input>
                        </div>
                        <div className="input-control">
                            <input type="password" placeholder="Enter your password" value={password}
                                onChange={(e) => setPassword(e.target.value)} className="input-field"></input>
                        </div>
                        <button type="submit" name="submit" className="input-submit" value="Sign in">Login</button>
                        <p>New user? <span><a href="/Register">Create an account</a> </span></p>
                    </form>
                </div>
            </section>
        </div>
    )
}