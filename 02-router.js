let app;
let controller;

let timestamp = function(){
	let date = new Date();
	return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+':'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+':'+date.getMilliseconds();
}

let init_router = function(pApp, pController){
	return new Promise((resolve, reject)=>{
		app = pApp;
		controller = pController;

		// Here define the routes
		app.get('/', (req, res)=>{
			console.log('::Router:: '+timestamp()+' GET "/" recieved from: '+req.connection.remoteAddress);
			controller.getIndex(req,res);
		});

		resolve('::Router:: Routes are defined.');
	});
}

module.exports={
	'init_router':init_router
}