/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const knex = require("../knex");


function Message() {
    return knex("messages");
};

function SelectMessage(...props) {
    return knex.select(...props).from("messages");
};



function getMessages() {
    return Message();
}


function getMessageByID(userId){
    return Message().where({userId: userId});
};


module.exports = {
    GETallMessages: getMessages,
    GEToneMessage: getMessageByID
}