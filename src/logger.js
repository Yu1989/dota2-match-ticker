import bunyan from 'bunyan'

const logger = bunyan.createLogger({
  name: 'match ticker',
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

export default logger
