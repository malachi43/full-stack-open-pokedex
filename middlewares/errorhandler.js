const errorhandler = (err, req, res, next) => {
  if (res.headersSent) return next(err)
  res.status(err.status || 400).json({ success: false, msg: err.message || 'INTERNAL SERVER ERROR' })
}

module.exports = errorhandler