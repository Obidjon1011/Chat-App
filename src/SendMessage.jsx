import React, { useState } from 'react';
import { db, auth } from './Service/Firebase'
import firebase from 'firebase/compat/app';

function SendMessage({scroll}) {
    const [msg, setmsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        if (msg === '') {
            alert('Maydonlarni to`ldiring')
        }else {
            db.collection('messages').add({
                text: msg,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setmsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center w-50' >
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
                <input className=' form-control' value={msg} onChange={(e) => setmsg(e.target.value)} type="text" placeholder='Write a message...' />
                <button type='submit' className='btn btn-primary'>Send</button>
            </div>
        </form>
    </div>
  );
}

export default SendMessage;
