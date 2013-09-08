//глобальные переменные
var oneOne = 1;
	
// всегда пиши var !!!	
globalll = 2444;

//пример как могут попортить жизнь, объявление переменных без var
//в данном случае i специально объявили без var
var outer = function () {
	var local = '22'; //локальная переменная
	var arr1 = [1,2,3];

	for ( i = 0; i < arr1.length; i++) {
		//console.log( i );
		inner();

		//console.log( 'первый цикл' );
	}
};

var inner = function() {

	var arr2 = [4,6,8];

	for ( i = 0; i < arr2.length; i++) {
		//console.log( i );
		//console.log( 'второй цикл' );
	}

};


outer();


//цепочка областей видимости

var k = 4;

console.log( k );
var outerScope = function() {
	var k = 8,
		i;

	console.log( k );

	var innerScope = function(){
		var k = 12;
		console.log( k );
	};

	innerScope();
	console.log( k );

};

outerScope();

console.log( k );

 