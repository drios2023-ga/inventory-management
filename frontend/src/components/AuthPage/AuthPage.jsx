import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <h1 className='auth-page-title'>Welcome to Inventory Tracker</h1>
      <div className='content-container'>
        <button onClick={() => setShowSignUp(!showSignUp)} className='auth-button' >{showSignUp ? 'Log In' : 'Sign Up'}</button>
        <div className='auth-container'>
          { showSignUp ?
              <SignUpForm setUser={setUser} />
              :
              <LoginForm setUser={setUser} />
          }
        </div>
      </div>
    </>
  );
}