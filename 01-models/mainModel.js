/* Here require specificl models */
const exampleModel = require('./exampleModel');

let init_models = function(mysql){
	return new Promise((resolve,reject)=>{
		// Here initialize each model
		exampleModel.init_model("This is some example data from the models of the server.")
		.then(data=>{
			console.log(data);
			resolve('::Main Model:: Models initialized.');
		}, err=>{
			console.log('::Main Model:: Error initializing models.');
			reject(err);
		});
	});
}

module.exports={
	'init_models':init_models,
	'exampleModel':exampleModel
}