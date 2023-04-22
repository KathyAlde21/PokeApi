//console.log('funcionando');
//https://pokeapi.co/api/v2/pokemon/
var btnConsultar = document.querySelector('#btnConsultar');
//cuando haga click se ejecuta esto:
btnConsultar.addEventListener('click', function(){
    //indicar el dato que voy a trabajar mediante id
    var nombrePokemon = document.querySelector('#nombrePokemon');   
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon.value,
        dataType: "json",
        success: function (response) {
            console.log(response);
            crearGrafico(respons); //es la funcion que estoy haciendo abajo
            //si necesito más funciones con los mismos datos las voy sumando acá abajo
        }
    });
    nombrePokemon.value = ''; //para consultar la url
});

function crearGrafico(dato){
    var chart = new CanvasJS.Chart("chartContainer", {  // va al canvas y ejecuta el metodo chart
        theme: "light2", // "light2", "dark1", "dark2" //colores
        animationEnabled: false, // change to true		
        title:{
            text: response.name
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc. //formas
            type: "column",
            dataPoints: [
                { label: "hp",  y: response.stats[0].base_stat  },
                { label: "attack", y: response.stats[1].base_stat  },
                { label: "defense", y: response.stats[2].base_stat  },
                { label: "special-attack",  y: response.stats[3].base_stat  },
                { label: "special-defense",  y: response.stats[4].base_stat  },
                { label: "speed",  y: response.stats[5].base_stat  }
            ]
        }
        ]
    });

}