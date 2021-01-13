const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const uPets = await User.query().withGraphFetched('pets')
  console.log(uPets)

  // Get all users, their pets, AND their children
  const uKidsPets = await User.query().withGraphFetched('[pets, children]')
  console.log(uKidsPets)

  // Get all users, their parents, and their grandparents
  const family = await User.query.withGraphFetched('[parents, parents.parents]')
  console.log(family)
  // Get all users, their pets, their chilren, and their childrens' pets
  const familyPets = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.log(familyPets)
  // -----
  cleanup()
}

run()
