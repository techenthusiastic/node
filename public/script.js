const resMsg = document.getElementById("resMsg");
function showRes(msg) {
	resMsg.innerHTML = msg;
	resMsg.style.display = "block";
}
//
const e1_URL = "/employees";
const form = document.getElementById("create-form");
form.addEventListener("submit", createEmp);
async function createEmp(event) {
	event.preventDefault();
	showRes("Request Initiated.<br>Please wait.....");
	const formData = new FormData(event.target);
	const formBody = new URLSearchParams(formData).toString();
	const promise = await fetch(e1_URL, {
		method: "POST",
		body: formBody,
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
	});
	const resp = await promise.text();
	showRes(resp);
}
//
const search = document.getElementById("inp5");
const sForm = document.getElementById("search-form");
sForm.addEventListener("submit", createEmp);
async function createEmp(event) {
	event.preventDefault();
	const forID = search.value;
	if (forID) window.open(`${e1_URL}/${forID}`, "_blank");
	else showRes("Please enter employee ID");
}
