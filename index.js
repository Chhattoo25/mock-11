const express = require("express");
var cors = require('cors')
const { connection } = require("./config/db");
const { productRouter } = require("./routes/product.routes");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welocme");
});

// POST 
app.use("/product",productRouter)




app.listen(PORT, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
    console.log("error connected to DB");
  }
  console.log(`server started at http://localhost:${PORT}`);
});
