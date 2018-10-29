
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments();
            table.string("name").notNullable();
        })
        .createTable("messages", (table) => {
            table.increments();
            table.integer("userId").unsigned().references("id").inTable("users");
            table.text("message").notNullable();
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("messages").dropTable("users")
};
