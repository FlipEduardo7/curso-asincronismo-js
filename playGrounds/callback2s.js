// function execCallback(callback) {
//     console.log("log after 2s");
// }
// setTimeout(execCallback, 2000, execCallback);

function execCallback(callback) {
  window.setTimeout(() => {
    callback();
  }, 2000);
}
