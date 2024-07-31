chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log("Message received in content script", request);
	if (request.action === "scrape") {
		let data = document.querySelectorAll(".title"); // Ensure this matches your target element
		console.log("Data selected", data);
		let result = Array.from(data).map((element) => element.innerText);
		console.log("Scraped result", result);
		sendResponse({ result: result });
	}
});
