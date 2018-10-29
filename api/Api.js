const router = require("express").Router();


router.get("/", (request, response) => {
    return response.status(200).json({
        message: "You are in my API"
    });
});


module.exports = router;