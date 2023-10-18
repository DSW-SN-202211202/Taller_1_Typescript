import { series } from './data.js';
var peliculasTable = document.getElementById("series");
mostrarDatosPeliculas(series);
averageSeasons(series);
console.log(series);
function mostrarDatosPeliculas(series) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n        <td><a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        cursosTbody.appendChild(trElement);
    }
    peliculasTable.appendChild(cursosTbody);
}
function averageSeasons(series) {
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        total += serie.seasons;
    }
    var average = total / series.length;
    var averageElement = document.getElementById("seasons");
    averageElement.innerHTML = "Seasons average: <b>".concat(average, "</b>");
}
