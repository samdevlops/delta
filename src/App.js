import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/loginComponent';
import Navbar from './components/navbarComponent';
import SignUp from './components/signupComponent';
import Members from './components/membersComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/members" component={Members} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
