const chatRoutes = require('./chatsRouter');
const userRoutes = require('./userRoutes');

const appRouter = require('express').Router();

appRouter.use("/user", userRoutes);     //domain/api/v1/user
appRouter.use("/chats", chatRoutes);    //domain/api/v1/chats

module.exports = appRouter;