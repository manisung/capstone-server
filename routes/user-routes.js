const userRouter = require("express").Router();
const userController = require("../controller/user-controller");

// console.log(userController);

userRouter
.route("/:id")
.get(userController.findOneUser)

userRouter.route("/:id/events").get(userController.userEvents);

module.exports = userRouter;