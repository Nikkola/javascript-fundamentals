(function() {
	
var elems = document.getElementsByTagName("p"), //NodeList
	classElems = document.getElementsByClassName("paragraph"),
	idElem = document.getElementById("four"),
	elemSelector = document.querySelector("p"),
	elemsSelectorAll = document.querySelectorAll("p"), //getElementsByTagName работает быстрее
	elemsInDiv = document.querySelectorAll("div p"),
	idElemSelector = document.querySelector("#four"); //getElementById работает быстрее

	console.log( idElemSelector );

	console.log( elemsInDiv );
	console.log( elemSelector );
	console.log( elemsSelectorAll );
	console.log( classElems );
	console.log( idElem );
	console.log( elems );



for (var i = 0, len = elems.length; i < len; i++) {
	console.log( elems[i].tagName );
	console.log( elems[i].parentNode );
	console.log( elems[i].previousSibling.previousSibling );
	console.log( elems[i].nextSibling.nextSibling );
	console.log( elems[i].previousSibling.nodeName );

	console.log( elems[i].nodeType );
	console.log( elems[i].previousSibling.nodeType );

	if (elems[i].nodeType === 1) {
		console.log( "Это узел элемента" );
	}

	if (elems[i].previousSibling.nodeType === 3) {
		console.log( "Это текстовый узел" );
	}

}


console.log( document.querySelector("div").childNodes );
console.log( document.querySelector("div").children );
console.log( document.querySelector("div").lastChild );
console.log( document.querySelector("div").firstChild );
console.log( document.querySelector("div").innerHTML );

})();		