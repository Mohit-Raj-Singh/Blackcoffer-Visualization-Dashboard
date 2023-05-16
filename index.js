const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dataRouter } = require("./routes/DataRoutes");
const { connection } = require("./config/db");


const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage");
})


app.use("/data", dataRouter)


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Error in local host");
        console.log("err");
    }
    console.log(`server is running on port ${process.env.port}`);
})
