var foo = 'String';

// console.log( navigator.userAgent );
// console.log( navigator.platform );

//console.log( screen.width + ' x ' +screen.height );

//console.log( location.toString() );

//console.log( frames );

//console.log( history );


//window.confirm('BOM');
var bar = window.prompt();

if (bar === 'Привет') {
	alert('Привет и тебе от BOM!')
} else {
	alert('Пока!');
}