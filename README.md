# JWDA-Semana5
Repositorio del grupo conformado por: Angelica Rodriguez, Jorge Barrera, Wilson Gonzalez y Dario Herrera


# Cypress 

Este proyecto contiene el codigo de las pruebas E2E del codigo  GHOST 3.3.0, la url  para las pruebas fue la siguiente http://localhost:2368/

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Para poder ejecutar de manera correcta el proyecto debe tener configurado las siguientes herramientas en su maquina

```
Node,     Version 12.17.0
Cypress,  Version 7.2.0
Chrome,   Version  90.0.4430.93
Git,      Version  2.21.0
Ghost ,   Version  3.3.0
```

### Instalación 🔧

En este caso para ejecutar el proyecto debe haber instalado las herramientas indicadas anteriormente en el paso de **Pre-requisitos**, una vez instaladas debe ejecutar lo siguiente 

Pasos

```
Revisar que se encuentre configurado node de manera correcta, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, esta guia estara para un sistema operativo Windows, pero si configuro de manera exitosa las herramientas nombradas en  **Pre-requisitos** no deberia haber diferencia.

![Terminal](https://user-images.githubusercontent.com/78820446/117479939-8cc0dd80-af26-11eb-85a5-b3559aa18ac5.PNG)


* Ejecutar el comando node -v en la terminal, si aparece la version  esto indicaria que se encuentre instalado de manera correcta, en caso contrario debera revisar la instalacion de node en su maquina 

![Node ](https://user-images.githubusercontent.com/78820446/117480756-9eef4b80-af27-11eb-98bd-cb7756ef43ac.PNG)



El siguiente paso 

```
Revisar que se encuentre configurado cypress de manera correcta, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, puede ser la misma que abrio en el paso anterior para verificar  la instalacion de node

![Terminal](https://user-images.githubusercontent.com/78820446/117479939-8cc0dd80-af26-11eb-85a5-b3559aa18ac5.PNG)

* Ahora ejecutar el siguiente comando **Cypress -v**, en caso que no aparesca las versiones en cada campo deberia revisar la instalacion del cypress

![Cypress version](https://user-images.githubusercontent.com/78820446/117480168-dd383b00-af26-11eb-84f1-c3ef654e1a8a.PNG)




El siguiente paso 

```
Revisar que tenga instalado git en su maquina, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, puede ser la misma que abrio en el paso anterior para verificar  la instalacion de node

![Terminal](https://user-images.githubusercontent.com/78820446/117479939-8cc0dd80-af26-11eb-85a5-b3559aa18ac5.PNG)

* Ahora ejecutar el siguiente comando **git --version**, en caso que no aparesca la version debera revisar la instalacion de git

![git](https://user-images.githubusercontent.com/78820446/117470240-351d7480-af1c-11eb-9032-03f81b674975.PNG)


El siguiente paso 


```
Revisar que tenga instalado Ghost 3.3.0 de manera correcta, ya registrado un usuario e ingresando de manera correcta
```

* Sobre la carpeta que tiene configurado Ghost 3.3.0 debe ejecutar el siguiente comando **ghost start**, en caso de no salir de la siguiente manera tiene un error en la instalacion de Ghost 3.3.0 que debera revisar 

![ghost start](https://user-images.githubusercontent.com/78820446/117476511-a102db80-af22-11eb-91c7-78b66cf5dc65.PNG)

* En caso de ser la primera vez en Ghost 3.3.0 debera registrarse y evidenciar que ingresa a la pantalla del home de Ghost, en caso que no ingrese a la pantalla, tiene algo mal configurado que debera revisar.

![Ghost](https://user-images.githubusercontent.com/78820446/117479495-060c0080-af26-11eb-9845-2cf9a2e9ed23.PNG)


El siguiente paso 


```
Clonar el repositorio a traves de git siguiendo los siguientes pasos 
```

* Crear una carpeta vacia en cualquier ubicacion de su equipo 
* Abrir la terminal y ubicarse en la ruta donde se encuentra creada la carpeta a traves de la terminal 

![ruta terminal](https://user-images.githubusercontent.com/78820446/117470409-626a2280-af1c-11eb-94ee-e5463c3e506e.PNG)

* Clonar el repositorio a traves del siguiente commando  **git clone https://github.com/angelicamariarodriguez/JWDA-Semana5**

![git clone](https://user-images.githubusercontent.com/78820446/117471313-5af74900-af1d-11eb-9738-752c4f613512.PNG)



El siguiente paso 


```
Dirigirse a  la carpeta clonada con la terminal del paso anterior 
```

* Sobre la carpeta creada en el paso anterior y el proyecto clonado, debe ejecutarse el siguiente comando **cd JWDA-Semana5**

![CARPETA ](https://user-images.githubusercontent.com/78820446/117472609-b1b15280-af1e-11eb-8bd0-faa93ddb3865.PNG)

* Sobre la carpeta **JWDA-Semana5** ejecutar **npm install** no debe salir ningun error en el proceso de instalacion

![npm install ](https://user-images.githubusercontent.com/78820446/117474290-68fa9900-af20-11eb-891f-1ef3f9145f92.PNG)

## Funcionalidades y estrategias 🚗

Este proyecto está probando las siguientes funcionalidades:

1. Manage Pages:
    - Iniciar sesión en Ghost ir a post, filtar unicamente por la opcion de concepto
    - Iniciar sesión en Ghost ir a post, filtar unicamente por concepto y autor ghost
    - Iniciar sesión en Ghost ir a post, filtar unicamente por concepto, autor y tag
    - Iniciar sesión en Ghost ir a post, filtar unicamente por concepto, autor,  tag y publicacion reciente
3. Manage General Settings:
    - Iniciar sesión en Ghost ir a configuraciones generales y editar el título y la descripción del sitio.
    - Iniciar sesión en Ghost ir a configuraciones generales y editar la zona horaria del sitio.
    - Iniciar sesión en Ghost ir a configuraciones generales y poner el sitio como privado.
    - Iniciar sesión en Ghost ir a configuraciones generales y editar el campo de lenguage del sitio.
4. Manage Login:
    - Login con usuario y contraseña incorrectos
    - Login con usuario y contraseña correctos
    - Login con usuario correcto y contraseña incorrecta
    - Login con usuario incorrecto y contraseña correcta
 4. Create Posts:
    - Creación de post usando el botón "+" desde home
    - Creación de post usando el botón "New post" desde listado de posts
    - Creación de post con estado published usando el botón "New Post" desde listado de post
    - Creación de post con estado scheduled usando el botón "New Post" desde listado de post
 5. Manage Tags:
    - Iniciar sesión en Ghost ir a tags, crear un nuevo tag con nombre y descripción
    - Iniciar sesión en Ghost ir a tags, editar el nombre de un tag existente
    - Iniciar sesión en Ghost ir a tags, agregar metadata y descripción de metadata a un tag existente
    - Iniciar sesión en Ghost ir a tags, eliminar un tag existente

# Ejecutando pruebas E2E sobre Ghost 3.3.0 ⚙️


Para ejecutar  debe  hacer lo siguiente:

```
Ubicarse en la carpeta donde realizo la instalación de las node modules e instalar las dependencias usando npm install
```

![npm install ](https://user-images.githubusercontent.com/78820446/117474290-68fa9900-af20-11eb-891f-1ef3f9145f92.PNG)

1. **Para ejecutar las pruebas de la versión Ghost 3.3.0** debe ejecutar el comando **git checkout Ghost3.3.0**
2. Asegurese de haber inicializado ghost en la versión 3.3.0
3. Luego deberá modificar las variables **USER** y **PASSWORD** en el archivo **constant-page.js**, que está ubicado en el directorio **./cypress/page-objects/**, con sus credenciales registradas en Ghost 3.3.0. **Por ejemplo:


    **"USER":"arodriguezt9509@gmail.com",**
 
    **"PASSWORD":"********"
    
    Asegurese que la url sea la siguiente: 
    
    **static BASE_URL = 'http://localhost:2368/'**
      
4. Asegurese de tener la vista del sitio como **pública**. Para esto debe ir a "General Settings" en Ghost y en la sección "Advanced Settings" debe tener deshabilitada la opción de "Make this site private", como se observa a continuación.

5. Por último, ejecute el siguiente comando: **cypress run --headless**, en este caso si realizo las configuraciones de una manera correcta deberán empezar a ejecutarse los tests, en caso contrario deberaá revisar alguno de los pasos de instalación. 

# Ejecutando pruebas E2E sobre Ghost 3.42.5 ⚙️

Para ejecutar unicamente debe  hacer lo siguiente:

1. **Para ejecutar las pruebas de la versión Ghost 3.42.5** debe ejecutar el comando **git checkout Ghost3.42.5**
2. Asegurese de haber inicializado Ghost en la versión 3.42.5
3. Luego deberá modificar las variables **USER** y **PASSWORD** en el archivo **constant-page.js**, que está ubicado en el directorio **./cypress/page-objects/**, con sus credenciales registradas en Ghost 3.42.5. **Por ejemplo:


    **"USER":"arodriguezt9509@gmail.com",**
 
    **"PASSWORD":"********"
    
    Asegurese que la url sea la siguiente: 
    
    **static BASE_URL = 'http://localhost:2368/'**
    
4.  Asegurese de tener la vista del sitio como **pública**. Para esto debe ir a "General Settings" en Ghost y en la sección "Advanced Settings" debe tener deshabilitada la opción de "Make this site private", como se observa a continuación.

![image](https://user-images.githubusercontent.com/78829003/117516478-d75e4c00-af5e-11eb-8002-3ff61f2e25d6.png)

5. Por último, ejecute el siguiente comando: **cypress run --headless**, en este caso si realizo las configuraciones de una manera correcta deberán empezar a ejecutarse los tests, en caso contrario deberaá revisar alguno de los pasos de instalación. 

# Ejecutando pruebas E2E con generación de datos a-priori sobre Ghost 3.42.5 ⚙️

Para ejecutar unicamente debe  hacer lo siguiente:

1. **Para ejecutar las pruebas con generación de  datos a-priori sobre la versión Ghost 3.42.5** debe ejecutar el comando **git checkout PoolAPriori**
2. Asegurese de haber inicializado Ghost en la versión 3.42.5
3. Luego deberá modificar las variables **USER** y **PASSWORD** en el archivo **constant-page.js**, que está ubicado en el directorio **./cypress/page-objects/**, con sus credenciales registradas en Ghost 3.42.5. **Por ejemplo:


    **"USER":"arodriguezt9509@gmail.com",**
 
    **"PASSWORD":"********"
    
    Asegurese que la url sea la siguiente: 
    
    **static BASE_URL = 'http://localhost:2368/'**
    
4.  Asegurese de tener la vista del sitio como **pública**. Para esto debe ir a "General Settings" en Ghost y en la sección "Advanced Settings" debe tener deshabilitada la opción de "Make this site private", como se observa a continuación.

![image](https://user-images.githubusercontent.com/78829003/117516478-d75e4c00-af5e-11eb-8002-3ff61f2e25d6.png)

5. Por último, ejecute el siguiente comando: **cypress run --headless**, en este caso si realizo las configuraciones de una manera correcta deberán empezar a ejecutarse los tests, en caso contrario deberaá revisar alguno de los pasos de instalación. Tenga en cuenta que se ejecutarán 20 escenarios con datos diferentes generados para la funcionalidad "Editar titulo y descripcion en Configuracion General" y 10 escenarios con datos diferentes generados para la funcionalidad " Editar Lenguaje en Configuracion General"


### Analice las pruebas end-to-end con generación de datos a-priori🔩

Luego de ejecutar las pruebas, como se indicó anteriormente, podrá ver los resultados en la consola, de la siguiente manera:

![image](https://user-images.githubusercontent.com/78829003/119213936-913dd800-ba88-11eb-898f-5f3e3cfbb5d7.png)


Puede observar que algunos de los casos ejecutados fallan debido a que no se ha cumplido el oráculo definido. La información del resultado esperado y el resultado actual, para cada uno de los casos fallidos, la puede encontrar igualmente en la consola.

![image](https://user-images.githubusercontent.com/78829003/119213954-a9adf280-ba88-11eb-9079-bb42fddb20cc.png)

**Nota: La descripción de la estrategia usada para la generación de datos a-priori y la definición de los oráculos, la puede encontrar como una página en la wiki de este repositorio.**


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Node 12.17.0](https://nodejs.org/es/download/releases/) - Node
* [Cypress](https://www.cypress.io/) - Cypress
* [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Javascript

## Autores ✒️

_Autor_

* **Wilson Alejandro Gonzalez Gaitan** - *Trabajo Inicial* - [Alejito29](https://github.com/Alejito29)
* **Dario Fernando Herrera Gonzalez** - *Trabajo Inicial* - [dherrera54](https://github.com/dherrera54)
* **Angelica Maria Rodriguez Torres** - *Trabajo Inicial* - [angelicamariarodriguez](https://github.com/angelicamariarodriguez9)
* **Jorge Ivan Barrera Rea** - *Trabajo Inicial* - [ivanbrij](https://github.com/ivanbrij)

## Video ✒️

Muestra de los videos funcionando


# Video de la funcionalidad Manage Login 


https://user-images.githubusercontent.com/78820446/117517823-ef37cf00-af62-11eb-93b7-c67e00850680.mp4




# Video de la funcionalidad Manage General Settings

https://user-images.githubusercontent.com/78829003/117552772-0e8e3500-b013-11eb-996f-5185e0d1cb87.mp4

# Vide de la funcionalidad Manage Pages


https://user-images.githubusercontent.com/78820446/117517836-f7900a00-af62-11eb-9524-9d9ecc34c33d.mp4



# Video de la funcionalidad Create Posts


https://user-images.githubusercontent.com/78746286/117514980-c1e72300-af5a-11eb-91f8-559ae5ecd82a.mp4


# Video de la funcionalidad Manage Tags

https://user-images.githubusercontent.com/78655008/117552025-a178a080-b00e-11eb-8630-4ee0fdc33056.mp4


## Licencia 📄

Este proyecto está bajo la Licencia (Copyleft) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

