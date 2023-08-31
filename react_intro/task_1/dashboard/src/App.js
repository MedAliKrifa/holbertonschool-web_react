import holblogo from './holberton-logo.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import { Notifications} from './Notifications';

function App() {
  return (
    <div className="App">
      <div className='root-notifications'>
        {Notifications()}
      </div>
      <header className="App-header">
        <img src={holblogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>
          {getFullYear()} {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
