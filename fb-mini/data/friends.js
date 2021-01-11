const casual = require('casual')
const userData = require('./users')

casual.define('friend', () => ({
  id: casual.uuid,
  friend1: casual.random_element(userData).id,
  friend2: casual.random_element(userData).id, 
  requestDate: casual.moment,
  status: casual.random_element(['ACCEPTED', 'PENDING', 'DENIED']),
}))

const friendData = []

for (let i = 0; i < 20; ++i) {
  friendData.push(casual.friend)
}

module.exports = friendData
