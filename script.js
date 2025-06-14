//your JS code here. If required.
const enterBtn = document.getElementById("enterBtn");
const statusEl = document.getElementById("status");

enterBtn.addEventListener("click", () => {
	statusEl.innerHTML = `
	<h1>Entered Metaverse</h1>
	`;
})