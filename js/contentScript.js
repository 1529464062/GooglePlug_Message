alert("注入成功");
console.log("注入成功");
chrome.extension.sendRequest({greeting:"hello",OK:"OK"},function(response){
	console.log(response.farewell);
});
