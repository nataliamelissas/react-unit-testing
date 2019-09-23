import React from 'react';
import './App.css';
import Link from './components/Link';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Coding <code>is</code> fun.
        </p>
        <Link href={'https://www.google.com'}>
          <input type="button" className='button' value="Click Me"></input>
        </Link>
      </header>
    </div>
  );
}

export default App;
