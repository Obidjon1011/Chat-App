import './App.css';
import ChatRoom from './ChatRoom'
import SignIn from './SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './Service/Firebase'

function App() {

  const [user] = useAuthState(auth)

  return (
    <>
      {
      user ?
      <div style={{background: '#0e1621'}} className='vh-100'>
        <ChatRoom  /> 
      </div>
      : <SignIn  />
      }
    </>
  );
}

export default App;
