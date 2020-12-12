// TODO: Fix this complete and utter mess

function filterTable(event) {
	var filter = event.target.value.toUpperCase();
	var rows = document.querySelector(tableNames[event.target.id]).rows;

	for (var i = 0; i < rows.length; i++) {
		var cells = [];

		for (const val of rows[i].cells) {
			cells.push(val.textContent.toUpperCase());
		}

		if (cells.some(e => e.indexOf(filter) > -1)) {
			rows[i].style.display = "";
		} else {
			rows[i].style.display = "none";
		}
	}
}

var tableNames = {
	"formsInput": "#formsTable tbody",
	"footworkInput": "#footworkTable tbody",
	"legTechniquesInput": "#legTechniquesTable tbody",
	"handTechniquesInput": "#handTechniquesTable tbody",
	"poleTechniquesInput": "#poleTechniquesTable tbody",
	"swordsTechniquesinput": "#swordsTechniquesTable tbody",
	"conceptsInput": "#conceptsTable tbody",
	"martialArtsInput": "#martialArtsTable tbody",
	"generalInput": "#generalTable tbody",
	"drillsInput": "#drillsTable tbody",

	"wingChunInput": "#wingChunTable tbody",
};

document.querySelector('#formsInput').addEventListener('keyup', filterTable, false);
document.querySelector('#footworkInput').addEventListener('keyup', filterTable, false);
document.querySelector('#handTechniquesInput').addEventListener('keyup', filterTable, false);
document.querySelector('#legTechniquesInput').addEventListener('keyup', filterTable, false);
document.querySelector('#poleTechniquesInput').addEventListener('keyup', filterTable, false);
document.querySelector('#conceptsInput').addEventListener('keyup', filterTable, false);
document.querySelector('#martialArtsInput').addEventListener('keyup', filterTable, false);
document.querySelector('#generalInput').addEventListener('keyup', filterTable, false);
document.querySelector('#drillsInput').addEventListener('keyup', filterTable, false);

document.querySelector('#wingChunInput').addEventListener('keyup', filterTable, false);