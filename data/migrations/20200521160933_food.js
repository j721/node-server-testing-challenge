
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('foods', tbl=>{
            tbl.increments(); //gives unique id
            tbl.string('name', 255).notNullable();
            tbl.string('category', 255).notNullable();

        })
  )
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("hobbits");
};
