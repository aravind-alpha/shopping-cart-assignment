const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

const banners = require("./server/banners/index.get.json");
const categories = require("./server/categories/index.get.json");
const products = require("./server/products/index.get.json");

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Banners
server.get("/banners", (request, response) => {
  if (request.method === "GET") {
    response.status(200).jsonp(banners);
  }
});

// Categories
server.get("/categories", (request, response) => {
  if (request.method === "GET") {
    response.status(200).jsonp(categories);
  }
});

// Products
server.get("/products", (request, response) => {
  if (request.method === "GET") {
    response.status(200).jsonp(products);
  }
});

server.listen(port, () => {
  console.log("JSON Server is running at port:" + `${port}`);
});
