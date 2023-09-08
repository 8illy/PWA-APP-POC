function clone(arr){
	return JSON.parse(JSON.stringify(arr));
}

function onMessage(event){
	console.log(event);
	if(event.origin==apOrigin){
		let data = JSON.parse(event.data);
		messageHandler(data);
	}
	//event.
}
	
function postMessage(data){
	if(!apPortal || !apPortal.window){
		apPortal = window.open(apPortalBaseUrl,"UKAS Portal",{
			toolbar : false,
			menubar : false,
			location : false,
			status : false,
		});
	}
	
	apPortal.postMessage(JSON.stringify(data),"*");
}
	


//incase swap away from localStorage
function setItem(key,value){
	let val = typeof value == "object" ? JSON.stringify(value) : value;
	localStorage.setItem(key,val);
}

function getItem(key){
	return localStorage.getItem(key)
}



///////////////////////////////////////////////////

function openScene(scene,param={}){
	$("#appBody").html(kendo.template(scene)(param));
}

function openAssessment(e,uid){
	//todo - assessment item info etc?
	let grid = getGrid(e);
	let dataItems = grid.dataItems();
	for(let i =0;i<dataItems.length;i++){
		if(dataItems[i].uid==uid){
			let data = clone(dataItems[i]);
			data.rowIndex = i;
			openScene(editAssessmentTemplate,data);
		}
	}
	
	
}

function addNewRow(e){
	let grid = getGrid(e);
	grid.addRow();
}

function saveGrid(grid,cb){
	let data = clone(grid.dataSource.data());
	cb(data);
}

function getGrid(e){
	return $(e.target).closest('[data-role="grid"]').data("kendoGrid");
}

function setAssessments(arr){
	setItem(keyAssessments,arr);
}

function getAssessments(){
	let arr = getItem(keyAssessments);
	return arr?JSON.parse(arr):[];
}

function updateAssessment(recordIndex){
	let record = {};
	$("[data-col]").each(function(){
		let col = $(this).attr("data-col");
		record[col] = $(this).val();
	});
	
	let grid = $("#assessmentEditGrid").data("kendoGrid");
	let data = clone(grid.dataSource.data());
	record.lines = JSON.stringify(data);
	
	
	let assessments = getAssessments();
	assessments[recordIndex] = record;
	setAssessments(assessments);
	rbf_growlSuccess("Local Record Updated","Note this has not synced online.")
}

function addListGrid(selector,data,columns,toolbar){
	$(selector).kendoGrid({
		dataSource: data ,
		toolbar : toolbar,

		scrollable: false,
		persistSelection: true,
		sortable: false,
		filterable: false,
	//	editable : false,
		columns: columns,
		edit:function(){
			this.closeCell();
		},
		dataBound:function(e){
			//todo - replace "undefined" with temp values.
		},
		editable : {
			createAt : "bottom",
		}

	});	
}

function addEditGrid(selector,data,columns,toolbar){
	$(selector).kendoGrid({
		dataSource: data ,
		toolbar : toolbar,

		scrollable: false,
		persistSelection: true,
		sortable: false,
		filterable: false,
	//	editable : false,
		columns: columns,
		/*edit:function(){
			this.closeCell();
		},*/
		dataBound:function(e){
			//todo - replace "undefined" with temp values.
		},
		editable : {
			createAt : "bottom",
		}

	});	
}
