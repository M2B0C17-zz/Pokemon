# EjercicioG1OBJ
_Ejercicio Guiado 1 - Objetos - Pokemon_


#### Material de apoyo:
**const ->** Las constantes presentan un ámbito de bloque tal y como lo hacen las variables definidas usando la instrucción let, 
con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación, y no se puede redeclarar.

**let ->** permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Lo anterior 
diferencia  la expresión let de la palabra reservada var , la cual define una variable global o local en una función sin importar 
l ámbito del bloque. (Usar la palabra reservada let para definir variables dentro de un bloque.)



### Ejercicio Práctico 1 - Ataque de Pokemon

## HTML:
1º Se creo en el HTML, 2 select (c/u con un id diferente y dentro del body), para ir seleccionando los pokemones que se quieran usar en ambas selecciones.
                                                     [ id="pkm2" y id="pkm1" ]

2º A cada opcion, se agregó un value con el nombre del pokemon que se mostrará después. Además agregue un boton (con la etiqueta button), conectandola con la funcion que permitira tener el resultado de nuestra lucha de pokemon.
                                          [ <button onclick="atacaPoke()">¡Atacar!</button> ]
                                          
3º Sobre la etiqueta script, que conecta nuestros documentos js y html, se colocó un parrafo, solo para que nuestro resultado obtenido en javascript se imprima en el html, en el formato <p>, también con su respectivo identificador id.
                                                      [ <p id="resul"></p> ]
                                                     

## Javascript:
1º Teniendo ya el objeto constructor realizado en el ejercicio guiado. Se crea una funcion que nos permitirá realizar la lucha que buscamos.
                                                     [ function atacaPoke(){...} ]

2º En la nueva funcion, se crean 2 variables del cual obtenermos el nombre del pokemon selecionado por el usuario. Con document.getElementById, llamamos al id de nuestros select en html. y se colocó .value, para que nos entregue el nomnbre del value en cada seleccion, por ejemplo: <option value="Chanchicornio">Chanchicornio</option>.
                                       [ var namePoke1 = document.getElementById("pkm1").value; ]
                                       [ var namePoke2 = document.getElementById("pkm2").value; ]
                                          
3º Luego se crean 2 variables, en donde crearemos a los pokemones que lucharan, con sus respectivos valores (segun parametros de nuestro objeto constructor), por ejemplo: function Pokemon(nombre,color,poderDeAtaque){...}. Además su poderDeAtaque los hice que fuera random.
                                    [ var poke1 = new Pokemon(namePoke1, 'amarillo', valorRandom); ]
                                      [ var poke2 = new Pokemon(namePoke2, 'rojo', valorRandom); ]

A.- Para que el valor fuera random, cree otra variable que nos permitirá obtener esos valores. Primero que el numero sea desde 0 a 100 y que con la ayuda de toFixed(3), nos entregara 3 numeros despues del ., por ejemplo: 5,99999999999...., nos regrese sólo 5,999. 
                                          [ var valorRandom = Math.random(0,100).toFixed(3); ]
                                          
4º Se crea nuevamente una nueva variable, para que nuestro resultado los imprima en el parrafo creado anteriormente en html.
                                           [ var res = document.getElementById("resul"); ]
                                           
5º Ya que queremos que nuestros pokemones no se maten a si mismos, declaramos una condicion: si el nombre de nuestro pokemon en la seleccion 1 es = al nombre de nuestro pokemon en la seleccion 2, tirar un mensaje por medio de alert, que nos diga que no se puede escoger al mismo pokemon para que luche contra si mismo. En caso de que esto sea falso, imprimir nuestro resultado.
                                          [ if(namePoke1 == namePoke2){
			                                          alert("No puedes atacarte a ti mismo. Escoge otro Pokemon");
		                                        }else{
                                              poke1.atacar(poke2)
                                              var texto = ( "namePoke1 + "</b> ataco a <b>" + namePoke2 + "</b> y <b>" 
                                              + namePoke2 + "</b> tiene <b>" + poke2.vida + "</b> de vida restante.");
                                              res.innerHTML = texto
		                                          }]
                                              
A.- Dentro de nuestro ElSE, llamamos a nuestro pokemon 1 creado, para que haga la funcion atacar (pokemon.vida = pokemon.vida - this.poderDeAtaque; return pokemon.vida;), a nuestro pokemon 2. 

B.- Dentro de una variable texto, agregamos concatenado nuestro resultado a imprimir.

C.- Decimos que queremos que se imprima nuestro texto con innerHTML en el parrafo cuyas coordenadas esta en nuestra variable res.

