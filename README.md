nodejs-mvc
==========

nodejs app step by step

##Primer Paso tag 01

### First

Generate a package.json file

```bash
npm init
```

### Second

- create a config.example.js
- se copia el config.example.js
```bash
cp config.example.js config.js
```
- Add config.js to .gitignore


### Third

Create a server.js to init tha application

### Forth

% run

```bash
npm install express --save
```

### Fift
```bash
node server.js
```

### Six
- visit http://localhost:3000/article/save/
- visit http://localhost:3000/article/list/

##Segundo Paso tag 02

### Seven
- Se separa el server de la libreria express
- Se crea la carpeta app
- Dentro de la carpeta app se crea el archivo expressServer.js

### Eigth
- Se pasa la libreria express de server.js a expressServer.js
- Se crea la clase expressServer en el archivo expressServer.js
- Se exporta la clase expressServer.
- Se pasa la sección **Create express app** de server.js
	para la clase expressServer de **expressServer.js**

### Ninth
- Se agrega config como parametro de la clase expressServer
- Para que expressServer sea un parámetro de la clase se agrega this
	a esta variable.
- Se llama el modulo de expressServer y se instancia el nuevo objeto app.

##Tercer Paso tag 03

### Ten
- se crea la carperta en app/middlewares donde se almacenan.
	todos los middlewares que va usar express.
- Se crea el archivo admin.js donde se van a requerir los middlewares.
- Se crea el middleware de static, que dice la carpeta del lado del cliente
	Frontend llamada public.
- Se crea el midleware favicon para que encuentre el favicon del proyecto



This site was built entirely for education purposes only.
