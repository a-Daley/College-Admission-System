'use strict'

const db = require('../server/db')
const {Profile} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const profiles = await Promise.all([
    Profile.create({
      stage: 'one',
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: '20',
      gender: 'male',
      income: 'lower',
      description:
        'After graduating, you move 700 miles away from your university.'
    }),

    Profile.create({
      stage: 'one',
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: '20',
      gender: 'male',
      income: 'middle',
      description:
        'After graduating, you move 700 miles away from your university.'
    }),

    Profile.create({
      stage: 'one',
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: '20',
      gender: 'male',
      income: 'middle',
      description:
        'After graduating, you move 700 miles away from your university.'
    }),

    Profile.create({
      stage: 'one',
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: '20',
      gender: 'male',
      income: 'middle',
      description:
        'After graduating, you move 700 miles away from your university.'
    })
  ])

  console.log(`seeded ${profiles.length} profiles`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
