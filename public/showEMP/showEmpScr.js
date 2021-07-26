const tbody = document.getElementById("tbody");
//
const data = document.getElementById("data").innerText;
const allEmp = data.split(";");
function genHTML(data) {
	let tStr = "";
	data.forEach((each, i) => {
		if (!each) return false;
		const data = JSON.parse(each);
		tStr += `<tr> <th scope="row">${i + 1}</th> <td>${data.id}</td> <td>${
			data.name
		}</td> <td>${data.email}</td> <td>${data.phone}</td> </tr>`;
	});
	tbody.innerHTML = tStr;
}
genHTML(allEmp);
