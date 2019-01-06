'use strict';
module.exports = errorHandler;

let errorHandler = (err, req, res, next) => {
  if (typeof (err) === 'string') {
    // custom appliction error
    return res.status(400).json({ message: err });
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authorization error
    return res.status(401).json({ message: 'Invalid Token'b});
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}
