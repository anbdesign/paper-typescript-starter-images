import { Path, Point, view, setup, Raster, CompoundPath } from "paper"

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


	var rec = new Path.Rectangle({
		point: [20, 20],
		size: [500, 500],
		// strokeColor: 'black'
		fillColor: 'grey'
	});

	var compound = new CompoundPath({
		children: [
			new Path.Circle({
				center: new Point(60, 60),
				radius: 30
			}),
			new Path.Circle({
				center: new Point(50, 120),
				radius: 10
			}),
			new Path.Circle({
				center: new Point(150, 200),
				radius: 50
			})
		],
		fillColor: 'black',
	});

	var result = rec.subtract(compound)
	rec.visible = false
	compound.visible = false

	result.fillColor = 'black'

	var circ = new Path.Circle({
		center: [20,20],
		radius: 200,
		fillColor: 'red'
	})
	circ.sendToBack()

}

window.onload = begin


