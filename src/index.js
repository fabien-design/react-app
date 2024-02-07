import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Video } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const video = {
  title: "simpson Episode",
  url: "https://www.youtube.com/watch?v=Ux_Mz6dPLpw",
  description: "simpson episode 7 saison 7"
}
root.render(
  <React.StrictMode>
    <App video={video} />
  </React.StrictMode>
);


const car = {
  brand: 'ffff',
  modele: {
    name: 'totot',
    year: 2018
  }
}
const year = car.propAccess('modele.year');
const toto = "{{modele.year}}".toto(car);
console.log(toto);

reportWebVitals();
