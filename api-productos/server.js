import express from "express";
import mongoose from "mongoose";
import { productRouter, clientRouter } from "./api/routes/index.js";

/**
 * Mongoose
 */

// Connect to db
await mongoose.connect(
  "mongodb+srv://erick:Delita1088@cluster0.bgsrz.mongodb.net/product_db"
);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/**
 * Express
 */
const app = express();

// Middleware
app.use(express.json());

// const m1 = (req, res, next) => {
//   console.log("Middleware", req.body);
//   req.body.product = { id: "122234215" };
//   // res.send("Middleware");
//   next();
// };

// const m2 = (req, res) => {
//   console.log("Middleware 2", req.body);
//   res.send("Middleware");
// };

// app.get("/middleware", m1, m2);

app.use("/api", productRouter);
app.use("/api", clientRouter);

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Iniatialized server!!");
});
