const { createLogger, format, transports } = require("winston");

const produceLogger = createLogger({
  transports: [
    new transports.File({
      filename: "produce.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "produce-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const userLogger = createLogger({
  transports: [
    new transports.File({
      filename: "user.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "user-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const salesLogger = createLogger({
  transports: [
    new transports.File({
      filename: "sales.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "sales-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const credsalesLogger = createLogger({
  transports: [
    new transports.File({
      filename: "credsales.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "credsales-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = { produceLogger, userLogger, salesLogger, credsalesLogger };
