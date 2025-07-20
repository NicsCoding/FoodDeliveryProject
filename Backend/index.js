const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const server = express();
server.use(express.json());
server.use(cors());
const userRouter = require("./router/userRouter");
const PathRouter = require("./router/router");
server.use("/user", userRouter.router);
server.use("/food", PathRouter.Router);
// async function main() {
try {
  mongoose.connect(process.env.URI);
  console.log("Database connected successfully");
} catch (err) {
  console.error("Error connecting to the database:", err);
}
// }
// main().catch((err) => console.error("Unhandled error:", err));
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
