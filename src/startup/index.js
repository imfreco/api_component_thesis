const express = require('express');

let _express = null,
  _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express().use(router);
  }

  start() {
    return new Promise((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(
          'server is running in http://localhost:' + _config.PORT + '/'
        );
        resolve();
      });
    });
  }
}

module.exports = Server;
