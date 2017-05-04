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
