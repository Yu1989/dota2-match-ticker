import bunyan from 'bunyan'

function createlogger (name) {
  return bunyan.createLogger({
    name: name,
    serializers: bunyan.stdSerializers,
    streams: [
      {
        level: 'info',
        stream: process.stdout            // log INFO and above to stdout
      },
      {
        level: 'error',
        path: `${__dirname}/../error.log`  // log ERROR and above to a file
      }
    ]
  })
}

export const serverLog = createlogger('match-ticker')
export const dataLog = createlogger('data-scraper')
