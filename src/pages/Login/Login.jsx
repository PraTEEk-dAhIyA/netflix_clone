import { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'

const Login = () => {

  const [signstate, setsignstate] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate == 'Sign Up' ? <input type="text" placeholder='Your Name' /> : <></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remeber">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate == 'Sign In' ? <p>New to Netflix? <span onClick={()=>{setsignstate("Sign Up")}}>Sign Up Now</span></p> : <p>Already have Account? <span onClick={()=>{setsignstate("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login