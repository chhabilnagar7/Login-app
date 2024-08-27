import React from 'react'
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'

const Login = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google","_self")
    }
  return (
    <div className='Login'>
        <h1 className='loginTitle'>Choose a Login Method</h1>
        <div className="wrapper">
            {/* styling for left portion */}
            <div className="left">
                {/* google  */}
                <div className="loginBtn google " onClick={google}>
                    <img src={Google} alt="" className='icon' />
                    Google
                </div>

                {/* facebook */}
                <div className="loginBtn facebook ">
                    <img src={Facebook} alt="" className='icon' />
                    Facebook
                </div>

                {/* github */}

                <div className="loginBtn github ">
                    <img src={Github} alt="" className='icon' />
                    GitHub
                </div>
            </div>
            {/* For Center Horizontal Line */}
            <div className="center">
               <div className="line"></div>
            </div>
            {/* For Right Side */}
            <div className="right">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password'/>
                <button className='submit'>Login</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Login
