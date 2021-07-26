const express = require("express");
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.use(express.static("public"));
//
const fs = require("fs");
//
app.get("/", (req, res) => {
	res.writeHead(200, { "content-type": "text/html" });
	fs.createReadStream("./public/index.html").pipe(res);
});
const empRouter = require("./router");
app.use("/employees", empRouter);
//
const http = require("http");
const httpServer = http.Server(app);
//
const PORT = process.env.PORT || 80;
httpServer.listen(PORT, function () {
	console.log(`Server Running on Port ${PORT}`);
});
