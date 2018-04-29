
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("classroom", function ( table ) {
    table.increments('id').primary;
    table.string("key").unique();
    table.string("owner");
    table.string("latest_assignment");
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('classroom');

};
