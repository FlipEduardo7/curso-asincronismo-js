function delay(time, message) {
    const promise = new Promise(function (resolve, reject) {
        resolve(message);
        reject("Error");
    });
  setTimeout(() => {
    promise.then((result) => {
        console.log(result);
    });
  }, time);
  return promise;
}

console.log(delay(2000, "Hello after 2s"));

/* export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time)
  })
} */
