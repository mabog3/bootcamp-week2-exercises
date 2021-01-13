const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const user = await User.query().findById('788cece1-1ae6-4c80-90fe-582ec4439a00')
  // Use that instance to create a new pet related that user
  const newPet = {
    type: 'DOG',
    name: 'Max',
    ownerId: '788cece1-1ae6-4c80-90fe-582ec4439a00'
  }
  const userPet = await Pet.query().insert(newPet).returning('*')
  console.log(userPet)
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const get = await user.$fetchGraph('[children, pets]')
  console.log(get)
  // -----
  cleanup()
}



run()
