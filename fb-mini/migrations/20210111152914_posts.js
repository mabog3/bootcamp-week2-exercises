
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table.string('postText')

    table.uuid('poster').references('users.id')

    table.integer('numLikes').notNullable()
  })

exports.down = async knex => knex.schema.dropTableIfExists('posts')
