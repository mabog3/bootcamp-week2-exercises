const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const testUser = User.query().first()
  console.log((await testUser).full_name())
  console.log(testUser.tableName())
    // -----
  cleanup()
}

run()
