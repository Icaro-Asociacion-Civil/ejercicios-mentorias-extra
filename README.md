# Material Didáctico
Este repositorio cuenta con material de práctica para los estudiantes de la <u>diplomatura</u> en *desarrollo web* impartida por la **Fundación Ícaro**.
<br>
<br>
Cuenta con distintas carpetas numeradas y ordenadas que a su vez poseen un nombre descriptivo del tema que abarcan. Lógicamente el material está organizado de forma intencionada para que se realice y practique desde el número 1 en adelante.
<br>
<br>
Dentro de cada carpeta encontrarán, generalmente, un archivo llamado 'ejercitacion.js' que es el archivo de código dónde encontrarán distintos ejercicios con sus respectivas consignas para que puedan ser resueltos.
De todas formas el segundo archivo que todas las carpetas tendrán sera un ReadMe con especificaciones sobre cada uno de los temas abordados en cada carpeta así como los ejercicios en concreto. E inclusive instrucciones a la hora de realizar la ejercitación.
<br>
## Pasos a Seguir
Lo primero que deberías hacer es __forkear__ este repositorio. Para hacer esto tienes que ir arriba en esta misma pantalla, debajo de la navbar de GitHub a la derecha. Podrás ver que hay 4 botones distintos: *Edit Pins*, *Watch*, *Fork* y *Star*.

Lo que debes hacer es **clickear** en el que dice *Fork* precisamente. Esto te redirigirá a una nueva interfaz de GitHub donde te permitirá configurar distintas opciones de tu fork. Como por ejemplo el nombre que tendrá el fork entre tus propios repositorios o la descripción del mismo.
Lo importante es que **dejes seleccionado** el checkbox ```Copy the master branch only``` y luego le des click (hacia abajo de la página) al botón verde *Create fork*.

Una vez esto, solo tienes que seguir los pasos usuales para **clonar** el fork de tu repo en tu computadora local y una vez hecho esto ¡listo! podrás abrirlo con Visual Studio Code o el editor de texto de tu preferencia.
Finalmente antes de comenzar te recomendamos abrir una terminal y posicionarte en el directorio de tu copia local del repo. Y una vez allí correr los siguientes comandos:

```
npm install
```

```
npm run test
```

Inicialmente debería instalarte todas las dependencias requeridas, creando el directorio ```/node_modules``` y el archivo ```package-lock.json``` además de que al correr inicialmente los tests, ninguno debería resultar exitoso.

Y ahora sí, ¡ya estás listo/a! solo tienes que seguir los README para guiarte e ir realizando las ejercitaciones dentro de las distintas carpetas.

A medida que resuelvas las ejercitaciones los tests deberían comenzar a resolverse con éxito (si logras resolver los ejercicios correctamente, claro). Esto es una guía muy util para que uno mismo pueda controlar si está resolviendo bien o mal los ejercicios y por lo tanto sirve para darse cuenta qué tanto entendió o no al final las clases de la diplomatura.

**DATO:** Así como los comandos arriba mencionados deben ser corridos por consola, a través de la misma el comando de test nos dará información relevante que puede marcarnos que está pasando cuando uno de los tests no se resuelve exitosamente.