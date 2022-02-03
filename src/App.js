import './App.css';
import LoginForm from './components/loginComponent';
import Navbar from './components/navbarComponent';
import SignUp from './components/signupComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp />
    </div>
  );
}

export default App;
