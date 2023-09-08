const sidebarTemplate = `
	<div id="menuwrapper">
		<ul>
			#for(let i in items){#
				<li class="sidebarItem">
					<a href="#:items[i].href#">
						<div class="sideBarLogoContain">
							<img class="sideBarLogo" src="./img/#:items[i].logo#-grey.svg" alt="">
							<img class="sideBarLogoHover" src="./img/#:items[i].logo#-white.svg" alt="">
						</div>
						<span class="siderbarTitle">#:items[i].title#</span>
					</a>
				</li>
			#}#
		</ul>
	</div>
`

const assessmentListTemplate = `
	<div>
		<div id="assessmentListGrid"></div>
		<script>
			addListGrid("[id=assessmentListGrid]",getAssessments(),assessmentColumns,assessmentToolbar);
		</script>
	</div>
`

const editAssessmentTemplate = `
	<div class="row buttonRow">
	
		<a style="color:unset" href="javascript:null;" onclick="openScene(assessmentListTemplate);">
			<img class="headerOptionsLogo" style="width: 21px; height: 21px;" src="./img/cancelled.svg" alt="Cancel">
			Cancel
		</a>
	
		<button onclick="updateAssessment(#:rowIndex#)" class="saveButton">Save</button>
	</div>
	
	<div class="row earRow">
		<div class="col-9">
			<div class="earTitleContainer">
				<span class="earTitle">Enhanced Assessment Report (EAR)</span>
				-
				<span class="earGuidance">combined AR and IAR for each assessment for each activity for each assessor</span>
			</div>
		</div>
		<div class="col-3">
			<div class="earTitleCell earTitleCellPurple">Assessor Name</div>
			<div class="formInputContainer">
				<textarea class="formInput inlineFormInput" data-col="assessorName">#:typeof assessorName!="undefined"?assessorName:""#</textarea>
			</div>
		</div>
		</div>
	</div>
	<div class="row earRow">
		<div class="col-5">
			<div class="earTitleCell">Customer Name</div>
			<div class="formInputContainer">
				<textarea class="formInput inlineFormInput" data-col="customerName">#:typeof customerName!="undefined"?customerName:""#</textarea>
			</div>
		</div>
		<div class="col-4">
			<div class="earTitleCell">Customer Number</div>
			<div class="formInputContainer">
				<textarea class="formInput inlineFormInput" data-col="customerNumber">#:typeof customerNumber!="undefined"?customerNumber:""#</textarea>
			</div>
		</div>
		<div class="col-3">
			<div class="earTitleCell earTitleCellPurple">Worker ID</div>
			<div class="formInputContainer">
				<textarea class="formInput inlineFormInput" data-col="workerId">#:typeof workerId!="undefined"?workerId:""#</textarea>
			</div>
		</div>
	</div>
	<div class="row earRow">
		<div id="assessmentEditGrid"></div>
		<script>
			let lines = JSON.parse(" #: typeof lines!="undefined"?lines:"[]"# ".replace(/&quot;/g, '"'))
			addEditGrid("[id=assessmentEditGrid]",lines,assessmentEditColumns,assessmentEditToolbar);
		</script>
	</div>
	
	<div class="row earRow">
		<div class="earTextAreaTitle">Record any updates required to Accreditation Programme</div>
		<textarea class="formInput fullTextFormInput" data-col="accreditationUpdates">#:typeof accreditationUpdates!="undefined"?accreditationUpdates:""#</textarea>
	</div>
	
	<div class="row earRow">
		<div class="earTextAreaTitle">Record any Schemes Reviewed</div>
		<textarea  class="formInput fullTextFormInput" data-col="schemesReviewed">#:typeof schemesReviewed!="undefined"?schemesReviewed:""#</textarea>
	</div>
	
	<div class="row earRow">
		<div class="earTextAreaTitle">Next Actions</div>
		<textarea  class="formInput fullTextFormInput" data-col="nextActions">#:typeof nextActions!="undefined"?nextActions:""#</textarea>
	</div>
	
	<div class="row earRow">
		<div class="col-12">
			<div class="earTitleCell" style="width:15vw">Health & Safety site Assessment</div>
			<div class="formInputContainer">
				<textarea class="formInput inlineFormInput" style="width: calc(100% - 15vw);" data-col="healthSafety">#:typeof healthSafety!="undefined"?healthSafety:""#</textarea>
			</div>
		</div>
	</div>
`