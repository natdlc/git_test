function funcOne(callback) {
	callback(function (cb) {
		console.log("from testfunc");
		cb();
	});
}

function cb(callback) {
	console.log("from cb1");
	callback();
}

function cb2(callback) {
	console.log("from cb2");
	// callback();
}

funcOne(cb);
