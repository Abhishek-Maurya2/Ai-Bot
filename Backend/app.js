const express = require("express");
// const morgan = require("morgan");
const appRouter = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove in production
// app.use(morgan("dev"));

app.use("/api/v1", appRouter); //domain/api/v1/

module.exports = app;
