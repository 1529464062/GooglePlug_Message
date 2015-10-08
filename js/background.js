chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(tab.id,{file:"js/contentScript.js"});
	//chrome.tabs.executeScript(null,{code:"alert('sdfsdfsdf');"});
});

chrome.extension.onRequest.addListener(
	function(request,sender,sendResponse){
		console.log(sender.tab?"from a content script:"+sender.tab.url:"from the extension");
		if(request.OK=="OK"){
			sendResponse({farewell:request.OK});
		}else{
			sendResponse({});
		}
	}
)
/*
 "browser_action":{
		"default_icon":"img/icon.png",
		"default_title":"Google Message",
		"default_popup":"html/popup.html"
	},
 * */