import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ongoing from './components/OngoingProject'
import Estate from './components/WhyChooseUs'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Ongoing />
    <Estate />
    <Contact />
    <Footer />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
