import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Storyboard from './components/Storyboard';
import Iterative from "./components/Iterative";
import Redesign from './components/Redesign';
import AnimeList from './components/AnimeList';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route exact path="/App" element={<App />} />
    <Route path="storyboard" element={<Storyboard />} />
    <Route path="iterative" element={<Iterative />} />
    <Route path="animelist" element={<AnimeList />} />
    <Route path="redesign" element={<Redesign />} />
  </Routes>
  </HashRouter>,
document.getElementById("root")
);
