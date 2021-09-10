import {React,useState} from 'react';
import './Styles/nav_style.css'
import logo from './Images/logo.png'
import { FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import './Styles/signup_style.css'
const Navbar = () =>{


    const [signup,setSignup] = useState(false)
    const [signin,setSignin] = useState(false)


    const showSignup = (e)=>{
      e.preventDefault()
      setSignup(true)
      hideSignin()
    
    //   document.body.style.overflow = "hidden";
    }
    
    const hideSignup =()=>{      
       setSignup(false)
    }

    const showSignin =(e)=>{
        e.preventDefault()
        setSignin(true)
        hideSignup()
    }
    
    const hideSignin=()=>{
        setSignin(false)
    }

    return(<>

       {signup?(
        <div className="signupBg">

        <span onClick={hideSignup} className="backBtn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white"/>
        </svg>
        </span>

          <div className="signupContainer">

          <div><p className="message">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></div>
            <div className="signinBox">
                <div className="row1"> 
                        <div>
                        <h2>Create Account</h2>      
                        </div>

                        <div >
                        <p className="loginRedirect">Already have an account?<span onClick={showSignin} className="signinLink">Sign in</span></p>
                        <span onClick={hideSignup}  className="smBackBtnCross">

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529"/>
</svg>


                        </span>
                        </div> 
                        
                    </div>
                    <div className='gridContainer'>
                            <div className="inputFields">
                                <input type="text" className="formInput Name" placeholder="First Name"/><input type="text" className="formInput Name" placeholder="Last Name"/><br />
                                <input type="text" className="formInput " placeholder="Email"/><br />
                                <input type="text" className="formInput " placeholder="Password"/><br />
                                <input type="text" className="formInput " placeholder="Confirm Password"/><br />
                            <button className="createAccBtn">Create Account</button> 

                            <div className="fbSignup">
                            <span className="fbIcon"></span>
                            Sign up with Facebook</div> 

                            <div className="googleSignup">
                            <span className="gIcon"></span>
                               Sign up with Google</div> 

                            </div>
                           
                            <div>
                                <div className="signupGraphics"> </div>
                                <p className='tcNote'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        
                        
                    </div>
                
                </div>
            </div>

        </div>
       ):null}

       {signin?(
        <div className="signupBg">

                    <span onClick={hideSignin} className="backBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white"/>
                    </svg>
                    </span>

                    <div className="signupContainer signin">

                    <div><p className="message">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></div>
                        <div className="signinBox">
                            <div className="row1"> 
                                    <div>
                                    <h2>Sign In</h2>
                                            
                                    </div>

                                    <div>
                                    <p>Don't have an account yet?<span onClick={showSignup} className="signinLink">Create one for free!</span></p>
                                    </div> 
                                </div>
                                <div className='gridContainer'>
                                        <div className="inputFields">
                                            {/* <input type="text" className="formInput Name" placeholder="First Name"/><input type="text" className="formInput Name" placeholder="Last Name"/><br /> */}
                                            <input type="text" className="formInput " placeholder="Email"/><br />
                                            <input type="text" className="formInput " placeholder="Password"/><br />
                                            {/* <input type="text" className="formInput " placeholder="Confirm Password"/><br /> */}
                                        <button className="createAccBtn">Sign In</button> 

                                        <div className="fbSignup">
                                        <span className="fbIcon"></span>
                                        Sign in with Facebook</div> 

                                        <div className="googleSignup">
                                        <span className="gIcon"></span>
                                        Sign in with Google</div> 
                                        
                                        <p className="fp">Forgot Password?</p>

                                        </div>
                                    
                                        <div>
                                            <div className="signupGraphics"> </div>
                                        </div>
                                    
                                    
                                </div>
                            
                            </div>
                        </div>

                    </div>
       ):null}

       
        <nav className="navbar">
          
            <div className="logo">
               <span className="world"><img src={logo} className="logoImage" alt="logo" /></span>
                <span className="smBackBtn"></span>
               
            </div>

            <div className="searchBar">
            <span className="serachLens"><FaSearch/></span>
            <input type="text" placeholder="Search your favorite groups in ATG"/>
            </div> 

            <div className="SignupLogin">
                <span  onClick={showSignup} id="SignupLoginBtn"><TiArrowSortedDown/></span>                
                <label onClick={showSignup} htmlFor="SignupLoginBtn">Create account.<span>It's Free!</span></label>
                 <button onClick={showSignup} className="smJoinGrp">Join Group</button>
            </div>
           
        </nav>
        </>
    )
}

export default Navbar;