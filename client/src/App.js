import { GoogleOAuthProvider } from '@react-oauth/google';


// components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId='736358070632-nm5orvnk3v33ru3ebhpf2udonlh3hmg2.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
