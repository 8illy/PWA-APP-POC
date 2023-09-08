//const apCustomerId = 11099;
//const apPortalId = 59879;
//const apLandingPageId = 420286932;
//const apPortalBaseUrl = `https://portal.ukas.com/router/servlet/Portal?c=${apCustomerId}&p=${apPortalId}&g=${apLandingPageId}`;
//const apOrigin = "https://portal.ukas.com";

const apCustomerId = 12732;
const apPortalId = 420286930;
const apLandingPageId = 420286932;
const apPortalBaseUrl = `https://dev-apps.codelessplatforms.com/router/servlet/Portal?c=${apCustomerId}&p=${apPortalId}&g=${apLandingPageId}`;
const apOrigin = "https://dev-apps.codelessplatforms.com";


const keyAssessments = "assessments";

let apPortal = undefined;
let nextPostMessages = [];


const assessmentColumns = [
	{ 
		field:"customerName", 
		title: "Customer Name",
		editor : false,
		edit : false,
		defaultValue : "New Customer",
		template: function (dataItem) {
			let field = kendo.htmlEncode(dataItem.customerName);
			let data = clone(dataItem);
			data.uid = String(dataItem.uid)
			return `<a onclick='openAssessment(event,"${data.uid}")' href="javascript:null;">${field}</a>`;
		},
	},
	{ 
		field:"customerNumber", 
		title: "Customer Number",
		editor : false,
		edit : false,
		defaultValue : "New Customer Number",
		template: function (dataItem) {
			let field = kendo.htmlEncode(dataItem.customerNumber);
			let data = clone(dataItem);
			data.uid = String(dataItem.uid)
			return `<a onclick='javascript:openAssessment(event,"${data.uid}")' href="javascript:null;">${field}</a>`;
		},
	},
	{
		command: [{
			name: "Upload", 
			imageClass: "k-icon k-i-close", 
			click: function (e) {
				e.preventDefault();
				let grid = $(e.target).closest('[data-role="grid"]').data("kendoGrid");
				let dataItem = this.dataItem($(e.target).closest("tr"));
				postMessage();//open window.
				
				nextPostMessages.push({
					action : "page",
					pageId : "420286947", //iar page.
				},{
					action : "createIAR",
					iar : dataItem,
				});
			}
		},{
			name: "Delete", 
			imageClass: "k-icon k-i-close", 
			click: function (e) {
				e.preventDefault();
				if(confirm("Are you sure you wish to delete this Assessment? This can not be undone.")){
					let grid = $(e.target).closest('[data-role="grid"]').data("kendoGrid");
					let dataItem = this.dataItem($(e.target).closest("tr"));
					let dataSource = grid.dataSource;
					dataSource.remove(dataItem);
					dataSource.sync();
					
					saveGrid(grid,setAssessments);
				}
			}
		}]
	}
];


const assessmentToolbar = [
	{ template: `<a role="button" class="k-button k-button-icontext k-grid-addAssessment" onclick="javascript:addNewRow(event);saveGrid(getGrid(event),setAssessments);" href="javascript:null;">Add Assessment</a>` },
	{ template: `<a role="button" class="k-button k-button-icontext k-grid-export" onclick="javascript:null;" href="javascript:null;">Export</a>` },
]


const assessmentEditColumns = [
	{ 
		field:"projectName", 
		title: "Project Name",
		//editor:"inline",
	},
	{ 
		field:"projectNumber", 
		title: "Project Number",
		//editor:"inline",
	},
	{ 
		field:"assessmentType", 
		title: "Assessment Type",
		//editor:"inline",
	},
	{ 
		field:"activityNumber", 
		title: "Activity Number",
		//editor:"inline",
	},
	{ 
		field:"activityDay", 
		title: "Activity Last Day",
		//editor:"inline",
	},
	{ 
		field:"additionalActivity", 
		title: "Additional Activity",
		//editor:"inline",
	},
	{ 
		field:"recommendation", 
		title: "Recommendation",
		//editor:"inline",
	},
	{ 
		field:"closeOut", 
		title: "Close Out",
		//editor:"inline",
	},
	{ 
		field:"lastDueDate", 
		title: "Last Due Date",
		//editor:"inline",
	},
	{
		command: [{
			name: "Delete", 
			imageClass: "k-icon k-i-close", 
			click: function (e) {
				e.preventDefault();
				if(confirm("Are you sure you wish to delete this Line? This can not be undone.")){
					let grid = $(e.target).closest('[data-role="grid"]').data("kendoGrid");
					let dataItem = this.dataItem($(e.target).closest("tr"));
					let dataSource = grid.dataSource;
					dataSource.remove(dataItem);
					dataSource.sync();
					//saveGrid(grid,setAssessments);
				}
			}
		}]
	}
];

const assessmentEditToolbar = [
	{ template: `<a role="button" class="k-button k-button-icontext k-grid-addAssessment" onclick="javascript:addNewRow(event);" href="javascript:null;">Add Line</a>` }
]




const sidebarConfig = {
	items : [
		{
			logo : "pc",
			href : "javascript:openScene(assessmentListTemplate);",
			title : "Assessments",
		},
		{
			logo : "org",
			href : "javascript:pullAssessors();",
			title : "Placeholder",
		},
		{
			logo : "clipboard",
			href : "#",
			title : "Placeholder",
		},
		{
			logo : "query",
			href : "#",
			title : "Placeholder",
		},
		{
			logo : "cert",
			href : "#",
			title : "Placeholder",
		},
		{
			logo : "edit",
			href : "#",
			title : "Placeholder",
		},
		
	]
}