const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = (async () => {
  // Write Queries and Logs Here !!!
  
  

  // Get all pets
  const allPets = await Pets.query()
  console.log(allPets)

  // Get the name and age of all users
  const allUsers = await User.query().select('firstname', 'lastname', 'age')
  console.log(allUsers)

  // ------
  cleanup()
})

run()
