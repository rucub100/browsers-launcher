const launcher = require("./index.js");

launcher.detect().then(
  (browsers) => {
    console.log(browsers);

    if (browsers.length > 0) {
      launcher.launch(
        browsers[0],
        "https://github.com/rucub100/browsers-launcher"
      );
    }
  },
  (error) => {
    console.log(error);
  }
);
