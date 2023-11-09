const express = require("express");
const app = express();
const getRoute = require("./Routes/ProductRoute")


//middle ware
app.use(express.json());

//api mounting

app.use("/api", getRoute);


//database
const dbconnect = require("./Config/database");
dbconnect();

//server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});