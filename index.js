const express = require('express');
const app = express();
const mongoose = require('mongoose');

//car_shop es el nombre de la base de datos
mongoose.connect(
	'mongodb://localhost/car_shop',
	(err, res) => {
		if (err) throw err;

		console.log('Conexión a la Base de datos Establecida');

		app.listen(3000, () => {
			console.log('API REST corriendo en http://localhost:3000');
		});
	}
);
