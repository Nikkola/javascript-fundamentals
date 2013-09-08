//function declaration

function funcDec (a, b) { 
   return a + b;
}
 

console.log( funcDec(2,3) );

//function expression

var funcExp = function(a, b) {
	return a + b;
};

console.log( funcExp(2,3) );

//hoisting

function func1() {
	function funcExample() {
		return 'one';
	}

	var variable =  funcExample();

	function funcExample() {
		return 'two';
	}

	return variable;

};


function func2() {
	var funcExample = function () {
		return 'one';
	}

	var variable = funcExample();

	var funcExample = function () {
		return 'two';
	}

	return variable;

};



console.log( func1() );
console.log( func2() );

//функции обратного вызова (callback)

var func = function(callback) {
	var name = "Nick";
	return callback(name);
};



console.log( func( function(n){
  	return "Hello " + n;
}) );


//возвращение функции

var func1 = function() {
	return function() {
		console.log( 'Привет!!!' );
	};
};

func1()();

//Immediately-Invoked Function Expression (IIFE)

var prop = 1;

;(function(pro) {
 	console.log( pro );
 	var prop2 = 2;
 	console.log( 'Привет от анонимной самовызывающейся функции!!!' );
 
})(prop);

//объект arguments

var funcArgs = function(){
	var i, 
		sum = 0;

	for (i = 0; i < arguments.length; i++ ) {
		sum += arguments[i];
	};

	return sum;
};

console.log(  funcArgs(1,2,3, 545 , 646, 6447, 444) );




 

