import type { Homerseklet } from "./Homerseklet.js";

document.addEventListener("DOMContentLoaded", ()=>{
  loadData()
  newData()
});

const API_KEY = 'https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json';

async function loadData() {
  const response = await fetch(API_KEY);
  const data: Homerseklet[] = await response.json();

  const tbody = document.getElementById('idojaras');
  for (const h of data) {
    const trDay = document.createElement('tr');
    const tdDay = document.createElement('td');
    tdDay.textContent = h.day;
    trDay.appendChild(tdDay);
    
    const trWeather = document.createElement('tr');
    const tdWeather = document.createElement('td');
    tdWeather.textContent = h.temperature.toLocaleString();
    trDay.appendChild(tdWeather);

    tbody?.appendChild(trDay);
    tbody?.appendChild(trWeather);
  }



}

async function newData() {
  
}