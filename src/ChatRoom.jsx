import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from './Service/Firebase'
import SendMessage from './SendMessage'

export default function ChatRoom() {
    const [messages, setmessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setmessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
    

  return (
      <div style={{background: '#0e1621'}} >
          <div className='msgs'>
            {
                messages.map(({id, text, photoURL, uid}) => {
                    return(
                        <div>
                            <div key={id} className={`msg ${uid === auth.currentUser.uid  ? 'sent' : 'received'}`} >
                                <img className='user-image' src={photoURL} alt="" />
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })
            }
            <SendMessage scroll={scroll} />
          </div>
          <div ref={scroll}></div>
      </div>
  );
}
