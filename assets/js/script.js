//console.log('funcionando');
//https://pokeapi.co/api/v2/pokemon/
var btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', function(){
    //indicar el dato que voy a trabajar mediante id
    var txtNombrePokemon = document.querySelector('#txtNombrePokemon');   
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + txtNombrePokemon.value,
        dataType: "json",
        success: function (response) {
            console.log(response);
            crearGrafico(response); //es la funcion que estoy haciendo abajo
            //si necesito más funciones con los mismos datos las voy sumando acá abajo
        }
    });
    txtNombrePokemon.value = ''; //para consultar la url
});

function crearGrafico(datos){
    var chart = new CanvasJS.Chart("graficoUno", {  // va al canvas y ejecuta el metodo chart
        theme: "light2", // "light2", "dark1", "dark2" //colores
        animationEnabled: true, // change to true		
        title:{
            text: datos.name,
        },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc. //formas
                type: "column",
                dataPoints: [
                    { label: "hp",  y: datos.stats[0].base_stat  },
                    { label: "attack", y: datos.stats[1].base_stat  },
                    { label: "defense", y: datos.stats[2].base_stat  },
                    { label: "special-attack",  y: datos.stats[3].base_stat  },
                    { label: "special-defense",  y: datos.stats[4].base_stat  },
                    { label: "speed",  y: datos.stats[5].base_stat  }
                ]
            }
        ]
    });
    chart.render();
}