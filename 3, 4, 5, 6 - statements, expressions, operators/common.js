var str = '"String" is a data type';
	str2 = "\"string\" is a data type",
	longStr = 'длинная\n \tстрока \tкакая то\n получилась';


	console.log( str2.length ); //кол-во символов в строке
	console.log( 'hello ' + 'world' ); //конкатенация

	console.log( 'hello ' .concat('world') ); //конкатенация

	console.log( str.charAt(1) ); //символ по индексу
	console.log( str.charCodeAt(1) ); //character code по индексу

	//работа с подстроками
	console.log( str.substring(0, 8) ); //начало, конец
	console.log( str.slice(-5) ); //можно с конца обрезать
	console.log( str.substr(14, 4 ) ); //второй аргумент кол-во символов

	console.log( str.split(' ') ); //разбиение на массив


	console.log( str.replace('string', 'number') ); //замена
	console.log( str.indexOf('a') ); //индекс по символу


	console.log( str.toUpperCase() ); //к верхнему регистру
	console.log( str.toLowerCase() ); //к верхнему регистру