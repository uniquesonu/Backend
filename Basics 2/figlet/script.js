var figlet = require("figlet");
var input = "Sonu"
figlet(input, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });