import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

/**
 * It returns a promise that resolves to the JSON data from the API.
 * @param urlApi - The URL of the API you want to fetch data from.
 * @returns The data is being returned.
 */
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

/**
 * The function 'anotherFn' is an asynchronous function that takes a URL as an argument, and then uses
 * the 'fetchData' function to fetch data from the URL, and then logs the data to the console.
 * @param urlApi - The base URL of the API.
 */
const anotherFn = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error){
        console.error(error);
    }
}

anotherFn(API);