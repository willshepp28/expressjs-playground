const router = require("express").Router(),
{  
    GETallUsers, 
     GEToneUser
} = require("../db/query/userQuery"),
{ GETallMessages, GEToneMessage } = require("../db/query/messageQuery");


/*
 |--------------------------------------------------------------------------
 | GET - message by id
 |--------------------------------------------------------------------------
 */
router.get("/", async (request, response) => {
    var users = await GEToneUser(1);
    var messages = await GEToneMessage(users[0].id);

    return response.status(200).json(messages);
});


module.exports = router;