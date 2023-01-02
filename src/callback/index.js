/** Funcion que retorna la suma de 2 numeros **/
function sum(num1, num2) {
    return num1 + num2;
}

/** funcion que recibe 3 parámetros **/
function calc(num1, num2, callback) { //recibe 2 numeros y una funcion callback
    return callback(num1, num2); //retornamos la funcion callback con 2 parámetros
}
console.log(calc(5, 25, sum));//llamamos la funcion calc y le mandamos los argumentos para hacer la suma y también le pasamos la funcion de sum

//la funcion setTimeout recibe 3 parámetros, la funcion que queremos llamar(si esta es requerida sino sera una funcion anonima),el tiempo de ejecucion y los parametros de la funcion(si son requeridos) 
setTimeout(function() {//la funcion setTimeout ya es una funcion callback
    console.log("Hola JS")
}, 3000);

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 5000, "Lalo");