
var firstFunc = function () {
	var index = 5;

	return function() {
		return index;
	};
};


var secondFunc = function() {
	var index = 15;

	var oldIndex = firstFunc()();

	if ( index > oldIndex ) {
		alert('Больше!');
	}
};

secondFunc();

