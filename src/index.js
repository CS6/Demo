import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DMarquee from './DMarquee';
import DocumentPaper from './DocumentPaper';
import reportWebVitals from './reportWebVitals';
import Intro from "./Intro"
import { Footer } from "@cs6/branding"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro>
      <div className="App-demo-background">
        <div class="background-img">
          我是全域背景
        </div>
        <DocumentPaper />
        {/* {/* <BackgroundPaper/> */}
        {/* <div className="placeholder">im 85xp</div> */}
      </div>
      {/* <DMarquee/> */}
      {/* <App /> */}
    </Intro>
    <Footer
      date="10. January"
      year="2022"
      link1={<a href="https://github.com/dayuan/drei">dayuan/drei</a>}
      link2={<a href="https://codesandbox.io/s/0mgum">s/0mgum</a>}
    />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
