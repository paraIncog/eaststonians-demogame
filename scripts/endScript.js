import { mainMenu } from "../pages/mainMenu.js";
import { end0Done } from "../narration/endings/end_0.js";
import { end1Done } from "../narration/endings/end_1.js";
import { end2Done } from "../narration/endings/end_2.js";

export function endsDoneCount() {
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
	console.log(end0Done)
	console.log(end1Done)
	console.log(end2Done)
}