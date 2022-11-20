// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// status variables
let userStatus = 200;
let weatherStatus = 200;
let itemStatus = 200;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/api": "/users",
  })
);

server.post("/statusform", (req, res) => {
  console.log("this is req", req.body);
  userStatus = req.body?.userStatus || userStatus;
  weatherStatus = req.body?.weatherStatus || weatherStatus;
  itemStatus = req.body?.itemStatus || itemStatus;
  res.status(200).jsonp({
    message: "status updated",
  });
});

server.get("/users", (req, res, next) => {
  console.log("user request");
  if (userStatus === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (userStatus === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (userStatus === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.get("/weather", (req, res, next) => {
  console.log("weather request");
  if (weatherStatus === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (weatherStatus === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (weatherStatus === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.get("/items", (req, res, next) => {
  console.log("items request");
  if (itemStatus === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (itemStatus === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (itemStatus === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
