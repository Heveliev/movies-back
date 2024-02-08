const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {authRouter,moviesRouter} = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/users', authRouter)
app.use("/api/movies", moviesRouter);


app.use((_,res) => {
    res.status(404).json({message: " Not found"});
});

app.use((err,_,res,__) => {
    const {status = 500, message = "Server error"} = err;
    res.status(status).json({
        message,
    });
})


module.exports = app;