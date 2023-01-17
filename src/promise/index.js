const promise = new Promise(function (resolve, reject){
    resolve("hey");
});

const cows = 5;

//al crear una promesa, esta recibe una funcion con dos parametros que son resolve y reject
const countCows = new Promise(function (resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} on the farm`);//si la promesa se cumple llamamos al metodo resolve que nos dara la respuesta que la promesa se ha cumplido
    } else {
        reject("There is no cows on the farm");//En caso contrario llamamos la funcion reject 
    }
});

//para ejecutarla tenemos que llamar a la promesa con el metodo then para mostrar el resultado si la promesa se cumplió
countCows.then((result) => {
    console.log(result);
}).catch((error) => { //en caso de que no se haya cumplido le concatenamos un catch para mostrar el error
    console.log(error);
}).finally(() =>{//Se haya o no cumplido la promesa podemos llamar la funcion finally para saber que la promesa ha terminado de ejecutarse
    console.log("Finally");
});