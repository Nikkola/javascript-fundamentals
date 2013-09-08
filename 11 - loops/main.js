var i;

//цикл for
var arr = [1,2,3],
	len = arr.length;

for ( i = 0 ; i < len ; i++ ) {
	console.log( arr[i] * 2 );
}


//цикл for in 

var obj = {
	propp: 'one',
	proppSecond: 'two'
},
prop;


for ( prop in obj ) {
	if ( obj.hasOwnProperty(prop)) {
		console.log( prop + ' : ' + obj[prop] );
	}
}


//цикл while
var k = 0
while (k < 10) {
 console.log( k++ );
};


//do while
var h = 0;

do {
	console.log( h++ );
} while (h < 1);