import { project } from "paper"


//currently name doesnt seem to work in some browsers.
//Save SVG from paper.js as a file.
export var downloadAsSVG = function (whatToExport?:any, fileName?:string, deleteHidden?:boolean) {
	console.log('downloading SVG....') 
	console.log('this can take a while...') 

	

	// https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
	// To explain, .slice(-2) gives us the last two characters of the string.
	// So no matter what, we can add "0" to the day or month, and just ask for the last two since those are always the two we want.

	let dateObj = new Date()
	let month = ('0' + (dateObj.getMonth() + 1)).slice(-2); //months from 1-12
	let day =( '0' + dateObj.getDate()).slice(-2);
	let year = dateObj.getFullYear().toString().slice(-2);

	let hour = ('0' + dateObj.getHours()).slice(-2)
	let minute = ('0' + dateObj.getMinutes()).slice(-2)

	let newdate = year + month + day;

	console.log(newdate)

	let fullFileName = newdate + "_" + hour + minute
	console.log(fullFileName)


	if(!fileName) {
		fileName = fullFileName + ".svg" 
	}
	
	let getString:any;

	if (whatToExport !== undefined) {
		getString = whatToExport.exportSVG({asString:true})
	} else {
		getString = project.exportSVG({asString:true})
	}

	var url = "data:image/svg+xml;utf8," + encodeURIComponent(getString);
	
	var link = document.createElement("a");
	link.download = fileName;
	link.href = url;
	link.click();
}
