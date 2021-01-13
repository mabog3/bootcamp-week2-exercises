const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    const ins = await User.transaction(async putin => {
      const Rita = await User.query(putin).insert({
        firstName: 'Rita', 
        lastName: 'Bogdanova', 
        age: 18, 
        email: 'rbogdanovashapkina@college.harvard.edu'
      
    }).returning('*')
      const myPet = await Rita.$relatedQuery('pets', putin).insert({
        type: 'BIRD', 
        name: 'SAM' //idk i dont have pets
      })
      return myPet
    })
    console.log(ins)
  } 
  
  catch(err) {
    console.log(err)
  }
  // Insert yourself in the users table

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)

  // -----
  cleanup()
}

run()
