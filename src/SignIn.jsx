import React from 'react';
import { auth } from './Service/Firebase'
import firebase from 'firebase/compat/app';
import Gif from './Media/Texting.gif'
import googleLogo from './Media/google-logo.png'

export default function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-6">
            <img className='w-100' src={Gif} alt="Message" />
          </div>
          <div className="col-lg-6">
            <div>
              <h2 className='text-center'>Chat App</h2>
              <p>Barchaga salom..!</p>
              <p>Bu web saytda siz barcha ro'yhatdan o'tganlar bilan muloqot qurishingiz mumkin. Boshlash uchun siz ham Google akkauntingiz bilan ro'yxatdan o'ting..!</p>
            </div>
            <div className="btn-group justify-content-center d-flex border mt-5" onClick={signInWithGoogle}>
              <img width={'50px'} src={googleLogo} alt="" />
              <button className='btn btn-primary' >Sign In width Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
