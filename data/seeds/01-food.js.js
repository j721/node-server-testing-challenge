
exports.seed = function(knex) {
  
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name: 'chicken', category: "protein"}
      ]);
    });
};
