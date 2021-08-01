const
  logger =require('morgan'),
  morganBody = require('morgan-body-ext'),
  rfs = require("rotating-file-stream"),
  uuid = require('uuid');

logger(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})


function formatDate(d) {
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  if (hour.length < 2)
    hour = '0' + hour;

  return [year, month, day, hour].join('-');
}

function log_file_name(time, index) {
  if (!time) return 'access.log';

  return [formatDate(time), index, 'access.log'].join('_');
}

let accessLogStream = rfs.createStream(log_file_name, {
  size: "300M",
  interval: "1d",
  path: '/../logs/',
  // path: path.join(__dirname, 'log')
});