const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Express Js");
});

app.listen(3000);
