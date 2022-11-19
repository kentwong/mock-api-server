// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/api": "/users",
  })
);

server.post("/testform", (req, res) => {
  console.log("this is req", req.body.name);
  res.send("this is done");
});

server.use(router);
server.listen(3030, () => {
  console.log("JSON Server is running");
});

// router.render = (req, res) => {
//   res.status(500).jsonp({
//     error: "error message here",
//   });
// };
