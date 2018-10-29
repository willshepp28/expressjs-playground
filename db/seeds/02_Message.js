
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {  userId: 1 ,message: "hey yall",},
        // { message: "wusup pretty people", userId: 2},
        // { message: "yolo", userId: 1},
        // { message: "ready to turn up", userId: 2},
        // { message: "hard work, really works", userId: 3},
        // { message: "I feel sexy", userId: 3},
        // { message: "i love programming", userId: 4},
        // { message: "I am the greatest", userId: 4}

      ]);
    });
};
