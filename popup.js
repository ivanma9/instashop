document.getElementById("scrapeButton").addEventListener("click", () => {
	console.log("Scrape button clicked");
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		console.log("Active tab queried");
		chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, (response) => {
			console.log("Message sent to content script", response);
			if (chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError);
			} else {
				document.getElementById("result").innerText =
					response.result.join("\n");
			}
		});
	});
});
