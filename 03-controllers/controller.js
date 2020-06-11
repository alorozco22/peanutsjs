let model;

let init_controller = function(pModel){
	return new Promise((resolve,reject)=>{
		model = pModel;
		resolve('::Controller:: Controller initialized.');
	});
}

// Here define your functions called from the router
let getIndex = function(req, res){
	// We consult model
	model.exampleModel.getData()
	.then(data=>{
		// We send
		res.render('./ejs/index', data);	
	}, err=>{
		console.log('::Controller:: Error rendering index. ', err);
	});
	
}

module.exports={
	'init_controller':init_controller,
	'getIndex':getIndex
}