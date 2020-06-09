# Architecture

  Para que nuestro juego funcione, necesitamos la carpeta assets, el archivo "index.html" y la carpeta js.  
  ![architect1](https://github.com/ZHAOYANNI/DVI/blob/master/slides/architecture1.png)  
  En la carpeta assets, están las imagenes y las músicas que usamos.  
  En el archivo "index.html" tenemos la configuración de la página web del proyecto.  
  En la carpeta js, están todos los archivos de javascript que necesitamos para que el juego funcione.  
  ![architect2](https://github.com/ZHAOYANNI/DVI/blob/master/slides/architectura2.png)  
  
  Con los archivos Menu.js y TerMenu.js implementamos los menús iniciales y finales.  
  En el archivo Game.js está implementado las mecánicas del juego. Podemos dividir el código de Game.js en 5 partes: peces, jugador,    enemigos, accesorios y ajustes.  
  Tenemos dos tipos de peces: peces grandes y peces pequeños.El jugador consigue más puntos al comer los peces grandes que come los peces pequeños. Por supuesto, el jugador tiene enemigos:las minas, los cubos tóxicos y los submarinos. Con el archivo Rocket.js conseguimos que los submarinos puedan disparar balas. El jugador puede destruir a sus enemigos disparando balas, esta funcionalidad está implementada en el archivo SharkB.js.  
   Además de los peces, el jugador puede comer accesorios que pueden sumar el número de balas del jugador, matar todos los peces y los enemigos, sumar puntos del juego, dar una vida más al jugador o quitar una vida del jugador. Estas funciones están implementadas en los archivos balas.js, bomba.js, meat.js, vida.js y Pezveneno.js respectivamente.  
  Para poder pausar el juego, hemos utilizado el archivo scenestop.js.  
  Tenenmos un archivo especial: "bubbe.js" que sirve para generar las burbujas del fondo.
