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
```

### Instalación 🔧

En este caso para ejecutar el proyecto debe haber instalado las herramientas indicadas anteriormente en el paso de **Pre-requisitos**, una ves instaladas debe ejecutar lo siguiente 

Pasos

```
Revisar que se encuentre configurado node de manera correcta Node, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, esta guia estara para un sistema operativo Windows, pero si configuro de manera exitosa las herramientas nombradas en  **Pre-requisitos** no deberia haber diferencia.

![Captura](https://user-images.githubusercontent.com/78820446/117469345-3d28e480-af1b-11eb-8735-0f52d706b95d.PNG)

* Ejecutar el comando node -v en la terminal, si aparece la version  esto indicaria que se encuentre instalado de manera correcta, en caso contrario debera revisar la instalacion de node en su maquina 


![Version de node](https://user-images.githubusercontent.com/78820446/117468734-993f3900-af1a-11eb-9a61-627eb569f4f3.PNG)


El siguiente paso 

```
Revisar que se encuentre configurado node de manera correcta cypress, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, puede ser la misma que abrio en el paso anterior para verificar  la instalacion de node

![Captura](https://user-images.githubusercontent.com/78820446/117469345-3d28e480-af1b-11eb-8735-0f52d706b95d.PNG)

* Ahora ejecutar el siguiente comando **Cypress -v**, en caso que no aparesca las versiones en cada campo deberia revisar la instalacion del cypress

![Cypress](https://user-images.githubusercontent.com/78820446/117469533-75c8be00-af1b-11eb-85c6-5ffa7e90efc4.PNG)



El siguiente paso 

```
Revisar que tenga instalado git en su maquina, se realiza de la siguiente manera
```

* Abrir la terminal de su equipo, puede ser la misma que abrio en el paso anterior para verificar  la instalacion de node

![Captura](https://user-images.githubusercontent.com/78820446/117469345-3d28e480-af1b-11eb-8735-0f52d706b95d.PNG)

* Ahora ejecutar el siguiente comando **git --version**, en caso que no aparesca la version debera revisar la instalacion de git

![git](https://user-images.githubusercontent.com/78820446/117470240-351d7480-af1c-11eb-9032-03f81b674975.PNG)



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
Dirigirse a  la carpeta clonada con la terminal
```

* Sobre la carpeta creada en el paso anterior y el proyecto clonado, debe ejecutarse el siguiente comando **cd JWDA-Semana5**

![CARPETA ](https://user-images.githubusercontent.com/78820446/117472609-b1b15280-af1e-11eb-8bd0-faa93ddb3865.PNG)

* Sobre la carpeta **JWDA-Semana5** ejecutar **npm install** no debe salir ningun error en el proceso de instalacion



## Ejecutando las pruebas ⚙️

Para ejecutar 

```
cypress open
```

_Seleccionar la carpeta correspondiente  y ejecutar   monkey_testing.spec.js _



### Analice las pruebas end-to-end 🔩

_En este caso el proyecto ejecuta pruebas no funcionales sobre el sistema para encontrar errores o comportamientos inesperados_


## Despliegue 📦

_Los comandos para ejecutar son_

```
npm install -g cypress
cypress open
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Node 12.17.0](https://nodejs.org/es/download/releases/) - Node
* [Cypress](https://www.cypress.io/) - Cypress
* [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Javascript

## Autores ✒️

_Autor_

* **Wilson Alejandro Gonzalez Gaitan** - *Trabajo Inicial* - [Alejito29](https://github.com/Alejito29)

## Video ✒️

Muestra un pequeño video del funcionamiento


https://user-images.githubusercontent.com/78820446/116794990-26a40880-aa97-11eb-834d-3f34878e0903.mp4



## Licencia 📄

Este proyecto está bajo la Licencia (Copyleft) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

