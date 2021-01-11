const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  birthdate: casual.date(format = 'YYYY-MM-DD'),
  bio: casual.sentence, 
  password: casual.word,
  fullName: casual.full_name
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
