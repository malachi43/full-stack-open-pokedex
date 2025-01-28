const express = require('express')
const app = express()
const morgan = require('morgan')

// get the port from env variable
const PORT = process.env.PORT || 5000

//print the route to the console.
app.use(morgan('dev'))

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.json({
    api_version: 1
  })
})

app.get('/health', (req, res) => {
  const timezoneOffset = new Date().getTimezoneOffset()
  const utcSeconds = Date.now()
  const now = new Date(utcSeconds + timezoneOffset).toISOString()
  res.json({ health: 'OK', date_time: now })
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
})
