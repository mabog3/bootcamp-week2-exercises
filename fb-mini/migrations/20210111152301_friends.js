
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table.enum('status', ['ACCEPTED', 'PENDING', 'DENIED'])

    table.uuid('friend1').references('users.id')

    table.uuid('friend2').references('users.id')

    table.datetime('requestDate')
  })

exports.down = async knex => knex.schema.dropTableIfExists('friends')
