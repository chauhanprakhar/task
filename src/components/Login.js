import React,{useState} from 'react'
import { Redirect,Link } from 'react-router-dom';


function Login() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [logged,setLogged] = useState(false)

console.log(email)
console.log(password)
const submitForm = e => {
    e.preventDefault();
    if(email === "prakhar@gmail.com" && password === "12345"){
        setLogged(!logged)
    }

}
console.log(logged)
 if(logged){
    return <Redirect to="/"/>
 }
  return (
    <form>
    <h3>Sign In</h3>

    <div className="form-group">
        <label>Email address</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>
    <p className="forgot-password text-right">
        Forgot <Link to="sign-in">password?</Link>
    </p>

    <button type="submit" onClick={submitForm} className="btn btn-primary btn-block">Submit</button>
    <br></br>
    <br></br>
    <button  className="btn btn-primary btn-block">Login with gmail</button>
</form>
    
  );
}

export default Login;