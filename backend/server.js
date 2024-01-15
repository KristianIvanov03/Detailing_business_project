require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const appointmentRoutes = require("./routes/appointments")
const contactRouter = require("./routes/contact")
const userRoutes = require("./routes/user")

//middlewares
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/appointment', appointmentRoutes)
app.use("/api/contact", contactRouter)
app.use("/api/user", userRoutes)


//database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.port}`);
        })
    })
    .catch((error) => {
        console.log('Error connecting to the database:', error);
    })