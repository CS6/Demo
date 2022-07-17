import logo from './logo.svg';
import './App.css';
// import { Footer } from "@cs6/branding"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Footer
          date="10. January"
          year="2022"
          link1={<a href="https://github.com/dayuan/drei">dayuan/drei</a>}
          link2={<a href="https://codesandbox.io/s/0mgum">s/0mgum</a>}
        /> */}
    </div>
  );
}

export default App;
