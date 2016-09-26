function Pelicula(id,titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

var Videoteca = (function () {

    var peliculas = [];
	

    var dibujarPelicula = function (pelicula) {

        var ul = document.getElementById("peliculas");


        var li = document.createElement("li");
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        var img = document.createElement('img');


        li.setAttribute('class', 'list-group-item'); 

		var nodoTextoH1 = document.createTextNode(pelicula.titulo);
		var nodoTextoP = document.createTextNode(pelicula.descripcion);

		h1.appendChild(nodoTextoH1);
		p.appendChild(nodoTextoP);

        img.setAttribute('src',  pelicula.imagen);


        li.appendChild(h1);
        li.appendChild(p);
        li.appendChild(img);


        ul.appendChild(li);

    }


    var existePelicula = function (pelicula) {

        var posicion = -1; 
        
        for(i = 0; i < peliculas.length && posicion === -1; i++) { 

            if (peliculas[i].id === pelicula.id) { 
                
                posicion = i; 

            }

        }

        return posicion;

    }

    var agregarPelicula = function (pelicula) {

    	 var posicion = existePelicula(pelicula);

         if (posicion === -1) {

            peliculas.push(pelicula);
            dibujarPelicula(pelicula);

         }  else {

             alert('La pelicula con titulo: ' + pelicula.titulo + ' ya existe');

         }

    }


    return {
        agregarPelicula: agregarPelicula,
        existePelicula: existePelicula
    };

})()

var elPadrino = new Pelicula(0,'El padrino','El padrino es una película estadounidense de 1972 dirigida por Francis Ford Coppola','http://es.seaicons.com/wp-content/uploads/2015/06/The-Godfather-icon.png');
Videoteca.agregarPelicula(elPadrino);

var cocodriloDundee = new Pelicula(1,'Cocodrilo Dundee','titulada en inglés Crocodile Dundee, es una película cómica estrenada el 24 de abril de 1986 en Australia','http://i465.photobucket.com/albums/rr19/au091jeff/Props/Crocodile_Dundee_2.jpg');
Videoteca.agregarPelicula(cocodriloDundee);

