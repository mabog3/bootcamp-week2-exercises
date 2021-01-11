const casual = require('casual')
const userData = require('./users')

casual.define('post', () => ({
  id: casual.uuid,
  poster: casual.random_element(userData).id, 
  numLikes: casual.integer(from=0, to=100), 
  postText: casual.sentences(n=3)
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  postData.push(casual.post)
}

module.exports = postData
