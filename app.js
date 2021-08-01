const   
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),  
  rfs = require('rotating-file-stream'),
  createError = require('http-errors'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  morganBody = require('morgan-body-ext'),
  // logger = require('./app/utils/logger'),
  // errorLog = require('./app/utils/WinstonLogger').errorlog,
  // successlog = require('./app/utils/WinstonLogger').successlog,  
  cors = require('cors'),
  uuid = require('uuid'),
  config = require('./app/utils/CustomRest'),
  AppError = require('./app/utils/AppError'),
  errorController = require('./app/controllers/ErrorController'),
  auth = require('./app/middleware/AuthMiddleware'),
  jwtSecret = process.env.JWT_SECRET;

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(jwtSecret));

// ---------------Setup Logger
app.use(assignId = (req, res, next) => {
  req.id = uuid.v4()
  next()
})

logger.token('id', function getId (req) {
  return req.id
})

function getISODate(date) {
  const clone = new Date(date);
  clone.setHours(12);
  return clone.toISOString().split('T').shift();
}

const generator = (time) => {  
  if (!time) return 'origin-access.log';
  return `origin-access-${getISODate(time)}.log`;
};

// create a rotating write stream
const accessLogStream = rfs.createStream(generator, {
  interval: '1d', // rotate daily
  path: '../../logs/',  
});


const loggerStream = {
  write: message => {
    accessLogStream(message);
  },
};

app.use(logger(':id :method :url :status :response-time ms', { stream: accessLogStream }))
morganBody(app, {   
  noColors: false, prettify: false, stream: accessLogStream  
});


// ---------------- Cors --------------
// app.use(cors());

app.use(cors({
  credentials: true,
  origin: true  
}));

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", process.env.CORS_ORIGIN);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Api list
// --- AuthUser
const authRouter = require('./app/routes/AuthRouter');
app.use('/api/auth', authRouter);

// --- User
const userRouter = require('./app/routes/UserRouter');
app.use('/api/users', userRouter);

// --- Todo
const todoRouter = require('./app/routes/TodoRouter');
app.use('/api/todo', todoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {  
   res.status(404).json(config.rest.createResponse(404, false, undefined,'Url API is not found'));
});


app.use(errorController);
module.exports = app;