importScripts("./add.js");

self.addEventListener("message", handleMessage, false);

function handleMessage(event) {
  var n = event.data.value;

  if (isNaN(n)) {
    postMessage({ errorMessage: "Not a number.", value: NaN });
  } else {
    postMessage({ value: add(n) });
    // self.close();
  }
}
