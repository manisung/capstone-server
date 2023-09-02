const eventRouter = require("express").Router();
const eventController = require("../controller/event-controller");

// console.log(eventController);

eventRouter
.route("/")
.get(eventController.eventsList);

eventRouter
    .route("/registered")
    .get(eventController.registered);
    

eventRouter
.route("/:id")
.get(eventController.findOneEvent);




eventRouter.route("/:id/users").get(eventController.eventUsers);

module.exports = eventRouter;