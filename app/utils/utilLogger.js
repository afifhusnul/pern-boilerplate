// const appRoot = require('app-root-path')
const {
  createLogger,
  format,
  transports
} = require('winston')
const {
  combine,
  timestamp,
  label,
  printf
} = format
const path = require('path')
require('winston-daily-rotate-file');
const httpContext = require('express-http-context')

/**
 * @method checkMessageProp
 * @param {message} can be object if developer defined, else it will be string
 *                  if its a network request
 * @returns a fixed format how the status code and message should show
 */
const checkMessageProp = (message) => {
  switch (typeof message) {
    case "object":
      const {
        statusCode,
        logMsg
      } = message
      return `${statusCode ? statusCode : "Not Defined"} || ${logMsg ? logMsg : "Not Defined"}`;
    case "string":
      let messageSplit = message.split(`"`)
      var message = messageSplit ? `${messageSplit[2].trim().split(" ")[0]} || ${messageSplit[1]}` : null
      return message
    default:
      return message
  }
}

/**
 * @method customFormat
 * @param {log} the log passed by the developer or based on network requests
 * @returns a customFormat how it should be logged to the log files
 */
const customFormat = printf(log => {
  const now = new Date();
  const reqId = httpContext.get('reqId');
  return `${log.timestamp ? new Date(log.timestamp) : now} || [${log.label}] || ${checkMessageProp(log.message)} || ${reqId ? reqId : null}`
});

/**
 * @method getFileName
 * @param {moduleObj} the module realted object passed from the require of logger file 
 * @returns the file name where the logger was invoked
 */
const getFileName = moduleObj => {
  if (Object.keys(moduleObj).length > 0) {
    let parts = moduleObj.filename.split(path.sep)
    return parts.pop()
  } else {
    return "Module not passed while requiring the logger"
  }
}

// Custom settings for each transport 
const options = moduleObj => {
  return {
    dailyRotateFile: {
      //filename: `${appRoot}/logs/TPS-UI-%DATE%.log`,
      filename: '../../logs/TPS-IU.log',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: "error",
      timestamp: new Date(),
      localTime: true
    }
  }
}

// Instantiate a Winston Logger with the settings
let utilLogger = moduleObj => {
  return createLogger({
    format: combine(
      label({
        label: getFileName(moduleObj)
      }),
      customFormat
    ),
    transports: [
      new transports.DailyRotateFile(options(moduleObj).dailyRotateFile)
    ],
    exitOnError: false // do not exit on handled exceptions
  })
}



module.exports = utilLogger