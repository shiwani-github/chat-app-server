//catch errors handler

exports.catchErrors = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
        //validation errors
      if (typeof err === "string") {
        res.status(400).json({
          message: err,
        });
      } else {
        next(err);
      }
    });
  };
};

//mongodb validation error handler
exports.mongooseErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  const errorKeys = Object.keys(err.errors);
  let message = "";
  errorKeys.forEach((key) => (message += err.errors[key].message + ","));
  message = message.substring(0, message.length - 2);

  res.status(400).json({
    message
  })
};


//development error handler
exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || "";
    const errorDetails = {
        message : err.message,
        status: err.status,
        stack: err.stack
    }
    res.status(err.status || 500).json(errorDetails) //send json back
}

//production error handler
exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: 'Internal Server Error'
    })
}

//404 page error
exports.notFound = (req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    })
}


