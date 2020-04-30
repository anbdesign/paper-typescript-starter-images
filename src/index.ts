import { Path, Point, view, setup, Raster } from "paper"

import './paper.css';
// WEBPACK AND TYPESCRIPT BEING WEIRD
declare function require(name:string):any;
const urlimage = require('./test_pattern.png')
const urlimageRef = urlimage.default
console.log(urlimage.default)


const begin = () => {

	const canvas: HTMLCanvasElement =
		document.getElementById("myCanvas") as HTMLCanvasElement

	setup(canvas)

	const path = new Path()
	path.strokeColor = "green"

	const start = new Point(100, 100)
	path.moveTo(start)
	path.lineTo(start.add([200, -50]))
	view.draw()

	var raster = new Raster({
		// source: 'http://assets.paperjs.org/images/marilyn.jpg',
		source: urlimageRef,
		position: view.center
	});
	
	raster.scale(0.5);
	raster.rotate(10);


}

window.onload = begin


