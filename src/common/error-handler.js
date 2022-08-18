import expressValidation from 'express-validation'
import multer from 'multer'
/**
 * Handler error middleware
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const expressErrorHandler = (err, req, res, next) => {
  // Check error type
  if (err instanceof expressValidation.ValidationError) {
    // 400 - Bad request
    return res.status(400).json({
      code: 400,
      message: 'Bad request',
      data: err.errors,
    })
  } else {
    // 500 - Internal server error
    return res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: {
        err: JSON.stringify(err),
      },
    })
  }
}

export default expressErrorHandler
