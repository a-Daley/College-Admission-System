const Sequelize = require('sequelize')
const db = require('../db')

const Profile = db.define('profile', {
  stage: {
    type: Sequelize.ENUM('one', 'two', 'three', 'four', 'five')
  },
  age: {
    type: Sequelize.ENUM('20', '30', '40', '50', '60', '70')
  },
  race: {
    type: Sequelize.ENUM(
      'Black/African-American',
      'White/Caucasian',
      'Native American',
      'Hispanic/Latino'
    )
  },
  gender: {
    type: Sequelize.ENUM('female', 'male')
  },
  collegeTier: {
    type: Sequelize.ENUM(
      'elite college',
      'state university',
      'community college',
      'online college'
    )
  },
  income: {
    type: Sequelize.ENUM('lower', 'middle', 'upper')
  },
  description: {type: Sequelize.TEXT}
})

module.exports = Profile
