//Dependiendo del id(sección) de las tablas, hacer visible u ocultar las secciones
	document.getElementById("botonEditar").onclick = function() {
		document.getElementById("botonEditar").style.display = "none";
		document.getElementById("botonGuardar").style.display = "block";
		const tabla = document.getElementsByClassName("editable");
		for (var i=0; i < tabla.length; i++) {
		var editable = document.getElementById(editable);
		editable.contentEditable = true;
		document.getElementById("editable"+i).contentEditable = true;
		console.log(i);
		$("img").attr("width","500");
	  }
	}