//var obj = new Object();
var obj = {
	sdgsdg : 'str',
	func : function() {
		console.log( this );
	}
};

var prop = 'func';


//console.log(  obj.fff || 'name' );

obj.ddd = 'Gag 9';
obj.sdgsdg = 'Banan';

//console.log( obj );

var a = {prop: 1}, b = {prop: 2}, c = {prop: 3};


a = b = c = {prop: 'allTheSame'};


//console.log(a, b, c  );

var y = obj;

//console.log( y.sdgsdg );

//delete obj.func;

//console.log( obj );

obj.func();

var MYAPP = {
	
};