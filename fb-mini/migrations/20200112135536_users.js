exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('bio')

  table.datetime('birthdate')

  table.string('password').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
