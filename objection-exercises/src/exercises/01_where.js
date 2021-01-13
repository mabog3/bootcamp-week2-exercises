const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!
   
  // Get all users with a specific name (pick it from your database)
  const usersWithName = await User.query().where('firstName', 'Laney')
  console.log(usersWithName)
  // Do the same with object notation
  const obj = await User.query().where({firstName:'Laney'})
  console.log(obj)
  // Get all DOGS and BIRDS
  const pets = await Pet.query().whereIn('type', ['BIRD', 'DOG'])
  console.log(pets)
  // -----
  cleanup()
}

run()
