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
2. Manage General Settings:
    - Editar titulo y descripción del sitio
    - Editar la zona horaria
    - Hacer privado el sitio
    - Hacer público el sitio
3. Manage Login:
    - Login con usuario y contraseña incorrectos
    - Login con usuario y contraseña correctos
    - Login con usuario correcto y contraseña incorrecta
    - Login con usuario incorrecto y contraseña correcta
 4. Create Posts:
 5. Manage Tags:

# Ejecutando las pruebas ⚙️

## 1. Manage Pages:
Para ejecutar unicamente debe  hacer lo siguiente 

```
Ubicarse en la carpeta donde realizo la instalacion de las node modules
```

![npm install ](https://user-images.githubusercontent.com/78820446/117474290-68fa9900-af20-11eb-891f-1ef3f9145f92.PNG)


Posteriormente debe editar los siguentes archivos, estos archivos se encuentra dentro de la carpetas de **integration** y la carpeta principal

```
automation-config.json
login-pages.spec.js
manage-pages.spec.js
```

![Rutas](https://user-images.githubusercontent.com/78820446/117482499-1920cf80-af2a-11eb-9c3c-f1a46d2622a5.PNG)

![COnfig](https://user-images.githubusercontent.com/78820446/117482587-33f34400-af2a-11eb-84de-ec7098e9a372.PNG)


En el archivo automation-config.json editar las siguientes variables 

**"user_login":"prueba@gmail.com"**
**"user_password":"123456789*"**
**"baseUrl":"http://localhost:2368/ghost/#/signin"**

Para los archivos **login-pages.spec.js** y **manage-pages.spec.js** unicamente debe modificar lo siguiente 

El archivo **login-pages.spec.js**


**const url = Cypress.config('baseUrl') || "http://localhost:2368/"** Colocar la dirrecion de host unicamente ip y puerto finalizando con  / 

![Login url](https://user-images.githubusercontent.com/78820446/117482753-70bf3b00-af2a-11eb-937f-e4dc51b8c4bb.PNG)


El archivo **manage-pages.spec.js** modificar lo siguiente 

**const user_login = Cypress.env('user_login') || ""** Dentro del terneario, es decir las comillas poner el usuario para el proyecto.
**const user_password = Cypress.env('user_password') || ""**  Dentro del terneario, es decir las comillas poner la clave del usuario para el proyecto.
**const url = Cypress.config('baseUrl') || ""** Dentro del terneario, es decir las comillas poner la dirrecion de la pagina de Ghost unicamente puerto e ip finalizando con / . ejemplo http://localhost:8530/

![pages](https://user-images.githubusercontent.com/78820446/117482939-b7ad3080-af2a-11eb-98bb-ee8d1a44ecac.PNG)

Por ultimo ya habiendo configurado los archivos y cambiando los datos por su  maquina unicamente queda ejecutar el siguiente comando 

```
cypress run --headless

```

Este comando empezara a ejecutar los test, deberan salir exitosos   en la consola 

![Exitoso](https://user-images.githubusercontent.com/78820446/117483939-0c9d7680-af2c-11eb-8d3c-148406024ffb.PNG)

## 2. Manage General Settings:

Antes de ejecutar los escenarios de esta funcionalidad debe hacer las siguientes modificaciones:

    1. Vaya al archivo automation-config.json y remplace los valore de de user y password, por su usuario y contraseña que registró en Ghost.

### Analice las pruebas end-to-end 🔩

En este caso para el analizis de las pruebas ejecutadas unicamente debe evidenciar los resultados de la consola y videos.


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


Vide de login 


https://user-images.githubusercontent.com/78820446/117484423-ab29d780-af2c-11eb-921c-409e39af3eee.mp4


Video de pages 


https://user-images.githubusercontent.com/78820446/117484451-b41aa900-af2c-11eb-9c92-08addb36166c.mp4




## Licencia 📄

Este proyecto está bajo la Licencia (Copyleft) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

