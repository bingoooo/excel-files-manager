// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict';

var Excel = require('exceljs');

console.log('sourced : renderer.js');

var workbook = new Excel.Workbook();
var Create = document.getElementById('create');
Create.addEventListener('click', ()=>{
	console.log('creating ')
	workbook.creator = 'Bingoooo';
	workbook.lastModifiedBy = 'Bingoooo';
	workbook.created = new Date();
	workbook.modified = new Date();
	var Infos =  document.getElementById('infos-field');
	Infos.innerHTML = 'New File ' + workbook.creator + ' Created ' + workbook.created;
});
console.log(workbook);