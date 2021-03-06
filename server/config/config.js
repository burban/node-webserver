// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimeinto del token
// ============================
// 60 segundos
// 60 Minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
//  SEED de autentificacion
// ============================
process.env.SEED = process.env.SEED || 'secret';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// ============================
//  Google ClientID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1094447084511-3cfb0u2rojre92f7d14kv7jv4nqict53.apps.googleusercontent.com';