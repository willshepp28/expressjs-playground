/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const knex = require("../knex");


function User() {
    return knex("users");
};

function SelectUser(...props) {
    return knex.select(...props).from("users");
};





function getUsers() {
    return User();
}


function getOneUser(userId){
    return User().where({ id: userId });
};


module.exports = {
    GETallUsers: getUsers,
    GEToneUser: getOneUser
}