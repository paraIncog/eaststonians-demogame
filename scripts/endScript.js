/*
	Reached Ending 2
	End Screens Done 2/3
*/

function endsDoneCount() {
	if (end0Done && end1Done && end2Done) {
		ty_msg();
	} else {
		if (end0Done && end1Done && !end2Done || end0Done && !end1Done && end2Done || !end0Done && end1Done && end2Done)  {
			mainMenu()
		} else if (end0Done && !end1Done && !end2Done || !end0Done && !end1Done && end2Done || !end0Done && end1Done && !end2Done)  {
			mainMenu()
		} else if (!end0Done && !end1Done && !end2Done) {
			mainMenu()
		}
	}
}