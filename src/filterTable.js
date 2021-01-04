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

if (document.querySelector('#footworkInput') !== null)
	document.querySelector('#footworkInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#legTechniquesInput') !== null)
	document.querySelector('#legTechniquesInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#formsInput') !== null)
	document.querySelector('#formsInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#handTechniquesInput') !== null)
	document.querySelector('#handTechniquesInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#poleTechniquesInput') !== null)
	document.querySelector('#poleTechniquesInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#conceptsInput') !== null)
	document.querySelector('#conceptsInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#martialArtsInput') !== null)
	document.querySelector('#martialArtsInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#generalInput') !== null)
	document.querySelector('#generalInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#drillsInput') !== null)
	document.querySelector('#drillsInput').addEventListener('keyup', filterTable, false);

if (document.querySelector('#wingChunInput') !== null)
	document.querySelector('#wingChunInput').addEventListener('keyup', filterTable, false);