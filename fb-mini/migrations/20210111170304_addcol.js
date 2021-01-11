exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('fullName').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('fullName');
    });
};