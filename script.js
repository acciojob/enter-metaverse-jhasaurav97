//your JS code here. If required.
const enterBtn = document.getElementById("enterBtn");
const statusEl = document.getElementById("status");

enterBtn.addEventListener("click", () => {
	const h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	statusEl.replaceWith(h1);
})