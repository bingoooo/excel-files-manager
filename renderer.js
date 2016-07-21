// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict';

var Excel = require('exceljs');
var $ = require('jquery');
var fs = require('fs');

console.log('sourced : renderer.js');


window.onload = function(){

	// Apparition de la modal de création de fichier
	var NewFile = document.getElementById('new');
	NewFile.addEventListener('click', ()=>{
		console.log('New File');
		var Modal = document.getElementById('new-file-modal');
		Modal.classList.toggle('hide');
	})

	// Création d'un objet excel
	var workbook = new Excel.Workbook();
	var Create = document.getElementById('create');
	var Infos =  document.getElementById('infos-field');
	Create.addEventListener('click', ()=>{
		var filename = document.getElementById('filename').value;
		workbook.creator = 'Bingoooo';
		workbook.lastModifiedBy = 'Bingoooo';
		workbook.created = new Date();
		workbook.modified = new Date();
		Infos.innerHTML = 'New File ' + filename + ' Created at ' + workbook.created;
	});

	// Animation de la page de crédits
	var Credits = document.getElementById('credits');
	Credits.addEventListener('click', ()=>{
		var Modal = document.getElementById('credits-modal');
		Modal.classList.toggle('hide'); 
	});

	// TODO : Utilisation du file system pour la gestion de fichiers

	console.log($('create'));
	// console.log(workbook);


}