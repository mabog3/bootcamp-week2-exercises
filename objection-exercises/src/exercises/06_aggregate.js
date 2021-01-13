const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const totalUsers = await User.query().resultSize()
  console.log(totalUsers)

  // Get the average age of users

  const avg = await User.query().avg('age')
  console.log(avg)

  // Get the total number of dogs

  const totalDogs = await User.query().where('type', 'DOG').resultSize()
  console.log(totalDogs)

  // -----
  cleanup()
}

run()
