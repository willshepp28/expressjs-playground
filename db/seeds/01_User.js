
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: "will"},
        { name: "tiffany"},
        { name: "barbara"},
        { name: "sarah"},
        { name: "alex"}
      ]);
    });
};
