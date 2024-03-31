const app = require("./app");
const { connectDB, disconnectDB } = require("./db/connection");

// connections
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("server started and connected to DB on port 3000 🚀");
  });
})
.catch((err) => console.log(err))
