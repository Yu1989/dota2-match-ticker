import bunyan from 'bunyan'

/**
 * Helper to create a logger with designated name
 * @param  {string} name - Name of logger
 * @return {Object} A bunyan logger
 */
function createlogger (name) {
  return bunyan.createLogger({
    name: name,
    serializers: bunyan.stdSerializers,
    streams: [
      {
        level: 'info',
        stream: process.stdout // Log INFO and above to stdout
      },
      {
        level: 'error',
        path: `${__dirname}/../error.log` // Log ERROR and above to a file
      }
    ]
  })
}

export const serverLog = createlogger('match-ticker')
export const dataLog = createlogger('data-scraper')
