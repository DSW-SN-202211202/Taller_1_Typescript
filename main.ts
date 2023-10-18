import { Serie } from './serie.js';
import { series } from './data.js';


let peliculasTable: HTMLElement = document.getElementById("series")!;


mostrarDatosPeliculas(series);
averageSeasons(series);
console.log(series);


function mostrarDatosPeliculas(series: Serie[]): void {
    let cursosTbody: HTMLElement = document.createElement("tbody")
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
        <td><a href="${serie.url}" target="_blank">${serie.nombre}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        cursosTbody.appendChild(trElement);
    }
    peliculasTable.appendChild(cursosTbody);
}

function averageSeasons(series: Serie[]): void {
    let total: number = 0;
    for (let serie of series) {
        total += serie.seasons;
    }
    let average: number = total / series.length;
    let averageElement: HTMLElement = document.getElementById("seasons")!;
    averageElement.innerHTML = `Seasons average: <b>${average}</b>`;
}

