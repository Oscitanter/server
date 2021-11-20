const { json } = require("body-parser");
const express = require("express");
const userRouter = require("./routes/users");
const app = express();

app.use(json());
app.use("/users", userRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
