const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //abre una conexion con la API
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){//El 4 es si la solicitud esta completada
            if(xhttp.status === 200){//El 200 es solicitud correcta
                callback(null, JSON.parse(xhttp.responseText));//parseamos el texto recibido en un objeto con JSON.parse
            }
        }
        else{
            const error = new Error('Error: ' + urlApi);//mandamos que el error sucedio en la API
            return callback(error, null);//retornamos el error y los datos nulos 
        }
    }
    xhttp.send();
}