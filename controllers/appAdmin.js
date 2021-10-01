const appAdmin = require('express').Router()

appAdmin.get('/health', (req, res) => {
  res.send('ok')
})

module.exports = appAdmin
