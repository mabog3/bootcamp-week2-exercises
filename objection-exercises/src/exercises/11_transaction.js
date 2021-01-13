const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const insert = await User.transaction(async transaction => {
      const user = await User.query(transaction).insert({
        email: 'a',
        firstName: 'a',
        lastName: 'a',
        age: 18
      })
      const pet = await user.$relatedQuery('pets', transaction).insert({
        type: 'DOG', name: 'a'
      })
      const numPets = await Pet.query(transaction).resultSize()
      if (numPets > 15) {
        const del = await Pet.query(transaction).delete().where('type', 'BIRD').returning('*')
      }
    })
  } 
  
  catch(err) {
    console.log(err)
    throw new Error('This is an error')
  }


  // -----
  cleanup()
}

run()
