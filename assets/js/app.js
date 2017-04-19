window.addEventListener("load", function(){
	document.body.insertBefore(crearEstructura(),document.body.firstChild);
});

var arrayColores=[["red","purple","yellow"],["blue","green","black"]];
function crearEstructura(){
	var documentFragment = document.createDocumentFragment();
	arrayColores.forEach(function(elem){
		var divContenedor = document.createElement("div");
		divContenedor.classList.add("contenedor");
		divContenedor.setAttribute("id",elem[0]);
		var divPadre = document.createElement("div");
		divPadre.classList.add("padre");
		divPadre.setAttribute("id",elem[1]);
		var divHijo = document.createElement("div");
		divHijo.classList.add("hijo");
		divHijo.setAttribute("id",elem[2]);

		divContenedor.appendChild(divPadre);
		divPadre.appendChild(divHijo);
		documentFragment.appendChild(divContenedor);
	});

	return documentFragment;
}