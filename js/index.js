function sendNextPostMessage(){
	if(nextPostMessages.length){
		postMessage(nextPostMessages.shift());
	}
}

function messageHandler(data){
console.log(data)
	switch(data.action){
		case "login":{
			//postMessage({action:"page",pageId:"5566939"});
			sendNextPostMessage();
			break;
		}
		case "createIAR":{
			sendNextPostMessage();
		}
		case "ready":{
			// do things here.
			break;
		}
	}
}

function init(){
	
	window.addEventListener("message",onMessage,false);
	
	$("#sidebar").html(kendo.template(sidebarTemplate)(sidebarConfig));
	
	openScene(assessmentListTemplate)	

}

    

$(document).ready(init)