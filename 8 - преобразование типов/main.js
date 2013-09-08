
//явные преобразования
console.log(typeof String(455) ); //в строку
console.log(typeof Number('455') ); //в число
console.log(typeof Boolean(0) ); // в буль

//быстро в строку
console.log( typeof (23626 + '') ); 
console.log( 23626 + '' ); 

//быстро в число
console.log( typeof (+'23626') ); 
console.log( +'23626' ); 
console.log( +"" );
console.log( +true );
console.log( +false );

//быстро в буль
console.log( typeof (!!'24') ); 
console.log(  !!'24'  );  


var num = 777;

//функции и метод
console.log( typeof num.toString()  ); //в строку

console.log( parseInt( "100.24 px", 10 ) ); // в число
console.log( parseFloat( "100.24 px", 10 ) ); //может преобразовать число с плавающей точкой
