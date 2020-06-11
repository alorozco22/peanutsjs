let initialCondition;

let init_model = function(pInitialCondition1){
	return new Promise((resolve, reject)=>{
		// Initializing this model
		initialCondition = pInitialCondition1;
		resolve('::Example Model:: Model initialized.');
	});
}

let getData = function(){
	return new Promise((resolve,reject)=>{
		resolve({'cond1':initialCondition});
	});
}

module.exports={
	'getData':getData,
	'init_model':init_model
}