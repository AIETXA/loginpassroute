// Snippets de código para poder componer el programa

//Usado?: x
  const middlewares = require('./middlewares');
//--- Explicación: 

// estoy importando middlewares-------------------------------------------------------------------------------------

//Usado?: x
const bodyParser = require('body-parser');
//--- Explicación:

//estoy requiriendo una librería de Node.js que se utiliza con Express para analizar y procesar los datos del cuerpo de las solicitudes HTTP. -------------------------------------------------------------------------------------

//Usado?: x
const session = require('express-session');
//--- Explicación:

// esto sirve para mantener un estado persistente para cada usuario, facilitando la creación de aplicaciones web más dinámicas y personalizadas. -------------------------------------------------------------------------------------

//Usado?: x
const express = require('express');
//--- Explicación:

// con esto estoy importando el modulo Express para poder usarlo -------------------------------------------------------------------------------------

//Usado?: x
const bodyParser = require('body-parser');
//--- Explicación:

// estoy requiriendo una librería de Node.js que se utiliza con Express para analizar y procesar los datos del cuerpo de las solicitudes HTTP.-------------------------------------------------------------------------------------

//Usado?: x 
const session = require('express-session');
//--- Explicación:

// esto sirve para mantener un estado persistente para cada usuario, facilitando la creación de aplicaciones web más dinámicas y personalizadas-------------------------------------------------------------------------------------

//Usado?: x
const dotenv = require('dotenv');
//--- Explicación:

// Este módulo permite cargar variables de entorno desde un archivo .env en el directorio raíz de un proyecto, y hacerlas accesibles en el código como variables de entorno del sistema. -------------------------------------------------------------------------------------

//Usado?: x
const middlewares = require('./middlewares');
//--- Explicación:

// estoy importando middlewares en la pag.ppal-------------------------------------------------------------------------------------

//Usado?: x
const routes = require('./routes');
//--- Explicación:

// importo las rutas en la pag ppal-------------------------------------------------------------------------------------

//Usado?: x
dotenv.config();
//--- Explicación:

// estoy llamando al metodo para cargar las variables de entorno del archivo-------------------------------------------------------------------------------------

//Usado?: x 
const app = express();
//--- Explicación:

// creo una instancia para poder manejar las peticiones y respuestas del servidor -------------------------------------------------------------------------------------

//Usado?: x
const PORT = 4000;
//--- Explicación:

// guardo en una variable el puerto que voy a utilizar -------------------------------------------------------------------------------------

//Usado?: x
const dotenv = require('dotenv');
//--- Explicación:

// Este módulo permite cargar variables de entorno desde un archivo .env en el directorio raíz de un proyecto, y hacerlas accesibles en el código como variables de entorno del sistema-------------------------------------------------------------------------------------

//Usado?: 
dotenv.config();
//--- Explicación:

// estoy llamando al metodo para cargar las variables de entorno del archivo -------------------------------------------------------------------------------------

//Usado?:x
middlewares.setupApp(app);
//--- Explicación: 

//  se utiliza para configurar y registrar los middlewares en una aplicación web.-------------------------------------------------------------------------------------

//Usado?:x
routes.setup(app);
//--- Explicación: 

//  se usa para registrar las rutas o endpoints de una aplicación web,-------------------------------------------------------------------------------------

//Usado?:x
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
// es el middleware con la funcion para validar la palabra que el usuario ponga en el input si es correcta sigue y sino devuelve un mensaje de error--- Explicación: 


// -------------------------------------------------------------------------------------


//Usado?: x
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//Muestra la página de inicio si no hay sesión. Redirige al perfil si el usuario ya está logado. Muestra mensajes de error si hubo un intento fallido anterior.--- Explicación: 


// -------------------------------------------------------------------------------------


//Usado?:x
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//uesta del servidor que envía al navegador una página HTML cuando entramos a la pag.principal--- Explicación: 


// -------------------------------------------------------------------------------------

//Usado?:x
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
// Se configura el entorno de la aplicación  ------------------------------------------------------------

//Usado?:x
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//Esto define lo que pasa cuando alguien envía el formulario con la palabra desde la página de inicio.--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:x
app.use(bodyParser.urlencoded({ extended: true }));

//permite que el servidor maneje datos de formularios HTML enviados mediante el método POST. El extended: true permite el uso de estructuras complejas como objetos y arrays dentro del cuerpo de la solicitud--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:x
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//permite que app use sesiones para recordar datos del usuario--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:x
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);});
// el servidor se esta inicializando en el puerto que le estamos pasando--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:x
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//es un middleware de proteccion, actua como un filtro para acceder a una ruta protegida--- Explicación: 

// -------------------------------------------------------------------------------------


//Usado?:x
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
// esta es la ruta para saber si la sesion esta activa o no--- Explicación: 

// -------------------------------------------------------------------------------------


//Usado?:x
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//Este código cierra la sesión del usuario y lo devuelve a la página de inicio--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:x
module.exports = {
  setup,
};
//exporto la funcion--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:x
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//exporto las funciones que use en middlewares--- Explicación:

// -------------------------------------------------------------------------------------

