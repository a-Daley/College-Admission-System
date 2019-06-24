const router = require('express').Router()
const {Profile} = require('../db/models')

// router.use('/stage-one', require('./stage-one'))
// router.use('/stage-two', require('./stage-two'))
// router.use('/stage-three', require('./stage-three'))
// router.use('/stage-four', require('./stage-four'))
// router.use('/stage-five', require('./stage-five'))

router.get('/stage-1', async (req, res, next) => {
  try {
    let data = await Profile.getDescription(req.query.college)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
