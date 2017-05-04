function Pokemon(nombre,color,poderDeAtaque){
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;

    this.vida = 100;
    this.poderDeAtaque = poderDeAtaque;

    this.mostrarPokemon = function(){
      return('Hola, soy: ' + this.nombre + ' y soy de color: ' + this.color);
    }

    this.aumentarAmistad = function(valor){
      this.nivelDeAmistad = this.nivelDeAmistad + valor;
    }

    this.atacar = function(pokemon){
      pokemon.vida = pokemon.vida - this.poderDeAtaque;
      return pokemon.vida;
    }
}
const Pikachu = new Pokemon('Pikachu','amarillo',100);
const Charmander = new Pokemon('Charmander','rojo',300);
const Jigglypuff = new Pokemon('Jigglypuff','rosado',50);
const Leafeon = new Pokemon('Leafeon','crudo con verde',300);
const Cubone = new Pokemon('Cubone','cafe',700);
const Chanchicornio = new Pokemon('Chanchicornio','blanco con rosado',700);

Pikachu.atacar(Charmander);
console.log(Charmander.vida);

// seleccion de pokemones y peleas


function atacaPoke(){
	var namePoke1 = document.getElementById("pkm1").value;
	var namePoke2 = document.getElementById("pkm2").value;

	var valorRandom = Math.random(0,100).toFixed(3);

	var poke1 = new Pokemon(namePoke1, 'amarillo', valorRandom);
	var poke2 = new Pokemon(namePoke2, 'rojo', valorRandom);

	var res = document.getElementById("resul");


		if(namePoke1 == namePoke2){
			alert("No puedes atacarte a ti mismo. Escoge otro Pokemon");
		}else{
			poke1.atacar(poke2)
			var texto = ( "<img src='https://s-media-cache-ak0.pinimg.com/564x/66/0e/1f/660e1f7b1b0ed7cf3a062f39263e6e4c.jpg' height='400'/>"+'<br><b>'+ namePoke1 + "</b> ataco a <b>" + namePoke2 + "</b> y <b>" + namePoke2 + "</b> tiene <b>" + poke2.vida + "</b> de vida restante.");
			res.innerHTML = texto
		}
}