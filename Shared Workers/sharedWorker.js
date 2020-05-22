onconnect = function (e) {
  var port = e.ports[0];

  port.addEventListener("message", function (e) {
    port.postMessage(e[0] + 1);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
