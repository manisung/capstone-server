const userRouter = require("express").Router();
const userController = require("../controller/user-controller");

// console.log(userController);

userRouter
.route("/:id")
.get(userController.findOneUser)

// TODO edit event controller below
userRouter.route("/:id/events").get(userController.userEvents);


// TODO rename controller to be different than above
userRouter.route("/:id/events/:eventId").get(userController.isUserRegisteredEvents);

module.exports = userRouter;