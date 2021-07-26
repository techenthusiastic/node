const express = require("express");
const empRoute = express.Router();
//
const fs = require("fs").promises;
const fileName = "employee.txt";
//
empRoute.post("/", async (req, res, next) => {
	const appendStr = JSON.stringify(req.body) + ";";
	let msg = "";
	try {
		await fs.appendFile(fileName, appendStr);
		msg = "Creation Success";
	} catch (error) {
		msf = "Creation Failed";
	}
	res.send(msg);
});
//
empRoute.get("/", async (req, res, next) => {
	const data = await fs.readFile(fileName, "utf8");
	if (data) {
		let htmlStr = await fs.readFile("./public/showEMP/showEmp.html", "utf8");
		htmlStr += data + "</pre> </body> </html>";
		res.send(htmlStr);
	} else
		res.send(
			"<center>No Employee Exists.<br>Go-to Root Directory to create one........</center>"
		);
});
//
empRoute.get("/:id", async (req, res, next) => {
	const ID = req.params.id;
	const data = await fs.readFile(fileName, "utf8");
	if (data) {
		const foundAt = data.indexOf(`"id":"${ID}"`);
		if (foundAt !== -1) {
			const extract = data.substring(foundAt - 1, data.indexOf(";", foundAt));
			let htmlStr = await fs.readFile("./public/showEMP/showEmp.html", "utf8");
			htmlStr += extract + "</pre> </body> </html>";
			res.send(htmlStr);
		} else
			res.send(
				`<center>No Employee Found with ID- ${ID}.<br>Go-to Root Directory to create one........</center>`
			);
	} else
		res.send(
			"<center>Employee Data-Base EMPTY.<br>Go-to Root Directory to create one........</center>"
		);
});
//
module.exports = empRoute;
